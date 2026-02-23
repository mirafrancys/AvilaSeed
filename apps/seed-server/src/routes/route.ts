import { Router } from 'express';
//import categoryTypeRouter from './categoryType-routes';
//import categoryRouter from './category-routes';
//import productRouter from './product-routes';
import attributeRouter from './attribute-routes';

const routes = Router();

//routes.use('/CategoryType', categoryTypeRouter);
//routes.use('/Category', categoryRouter);
//routes.use('/Product', productRouter);
routes.use('/Attribute', attributeRouter);

export default routes;