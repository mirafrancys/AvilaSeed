import { Router } from 'express';
import * as attributeController from '../controllers/attribute';

const attributeRouter = Router();

// Attribute CRUD
attributeRouter.post('/', attributeController.createAttribute);
attributeRouter.get('/:id', attributeController.getAttribute);
attributeRouter.put('/:id', attributeController.updateAttribute);
attributeRouter.delete('/:id', attributeController.deleteAttribute);

// Translation Management
attributeRouter.post('/:id/translations', attributeController.addTranslation);
attributeRouter.put('/:id/translations/:languageCode', attributeController.updateTranslation);
attributeRouter.delete('/:id/translations/:languageCode', attributeController.deleteTranslation);

export default attributeRouter;