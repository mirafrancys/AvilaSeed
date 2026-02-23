import { Request, Response } from 'express';
import * as attributeService from '../services/attribute';

// Attribute CRUD
export const createAttribute = async (req: Request, res: Response) => {
  try {
    const attribute = await attributeService.createAttribute(req.body);
    res.status(201).json(attribute);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAttribute = async (req: Request, res: Response) => {
  try {
    const attribute = await attributeService.getAttribute(Number(req.params.id));
    attribute ? res.json(attribute) : res.status(404).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAttribute = async (req: Request, res: Response) => {
  try {
    const attribute = await attributeService.updateAttribute(
      Number(req.params.id),
      req.body
    );
    res.json(attribute);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteAttribute = async (req: Request, res: Response) => {
  try {
    await attributeService.deleteAttribute(Number(req.params.id));
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Translation Management
export const addTranslation = async (req: Request, res: Response) => {
  try {
    const translation = await attributeService.addTranslation(
      Number(req.params.id),
      req.body
    );
    res.status(201).json(translation);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateTranslation = async (req: Request, res: Response) => {
  try {
    const translation = await attributeService.updateTranslation(
      Number(req.params.id),
      req.body
    );
    res.json(translation);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTranslation = async (req: Request, res: Response) => {
  try {
    await attributeService.deleteTranslation(
      Number(req.params.id)
    );
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};