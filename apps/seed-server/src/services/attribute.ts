import { db } from "../db/db";
import { AttributeInput, AttributeTranslationInput } from '../dtos/attribute.d';

export const createAttribute = async (data: AttributeInput & { translations?: AttributeTranslationInput[] }) => {
  return db.attributes.create({
    data: {
      attribute_type_id: data.attributeTypeId,
      slug: data.slug,
      icon: data.icon,
      attributetranslations: data.translations ? {
        createMany: {
          data: data.translations
        }
      } : undefined
    },
    include: { attributetranslations: true }
  });
};

export const getAttribute = async (id: number) => {
  return db.attributes.findUnique({
    where: { attribute_id: id },
    include: { attributetranslations: true, attributetypes: true }
  });
};

export const updateAttribute = async (id: number, data: Partial<AttributeInput>) => {
  return db.attributes.update({
    where: { attribute_id: id },
    data: {
      attribute_type_id: data.attributeTypeId,
      slug: data.slug,
      icon: data.icon
    }
  });
};

export const deleteAttribute = async (id: number) => {
  return db.$transaction([
    db.attributetranslations.deleteMany({ where: { attribute_id: id } }),
    db.attributes.delete({ where: { attribute_id: id } })
  ]);
};

// Gestion des traductions
export const addTranslation = async (attributeId: number, data: AttributeTranslationInput) => {
  return db.attributetranslations.create({
    data: {
      attribute_id: attributeId,
      language_id: data.language_id,
      name: data.name,
      description: data.description
    }
  });
};

export const updateTranslation = async (translationId: number, data: Partial<AttributeTranslationInput>) => {
  return db.attributetranslations.update({
    where: {
      translation_id: translationId
    },
    data
  });
};

export const deleteTranslation = async (translationId: number) => {
  return db.attributetranslations.delete({
    where: {
      translation_id: translationId
    }
  });
};