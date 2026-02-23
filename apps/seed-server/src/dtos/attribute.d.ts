export interface AttributeInput {
  attributeTypeId: number;
  slug: string;
  icon?: string;
  translations?: AttributeTranslationInput[];
}

export interface AttributeTranslationInput {
  language_id: string;
  name: string;
  description?: string;
}