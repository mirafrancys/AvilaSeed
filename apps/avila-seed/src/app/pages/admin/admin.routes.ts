import { Routes } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: 'category',
    loadComponent: () => import('./category/category.component').then(m => m.CategoryComponent),
  },
  {
    path: 'product',
    loadComponent: () => import('./product/product-grid.component').then(m => m.ProductGridComponent),
  },
];

export default adminRoutes;
