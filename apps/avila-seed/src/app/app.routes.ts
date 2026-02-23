import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'product/:categoryName/:id', 
    loadComponent: () => import('./pages/product/product.component').then(m => m.ProductComponent),
  },
  {
    path: 'products/:id', 
    loadComponent: () => import('./pages/product-list/product-list.component').then(m => m.ProductListComponent),
  },
  {
    path: 'about', 
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'events', 
    loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent),
  },
  {
    path: 'contact', 
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'terms-and-conditions', 
    loadComponent: () => import('./pages/terms-conditions/terms-conditions.component').then(m => m.TermsConditionsComponent),
  },
  {
    path: 'confidentiality', 
    loadComponent: () => import('./pages/confidentiality/confidentiality.component').then(m => m.ConfidentialityComponent),
  },
  {
    path: 'shipping', 
    loadComponent: () => import('./pages/shipping/shipping.component').then(m => m.ShippingComponent),
  },
  {
    path: 'shop/:id', 
    loadComponent: () => import('./pages/shop/shop.component').then(m => m.ShopComponent),
  },
  {
    path: 'login', 
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'register', 
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: 'admin', 
    loadChildren: () => import('./pages/admin/admin.routes'),
  },
  {
    path: '**',
    title: 'Page not found',
    loadComponent: () => import("./shared/components/page-not-found/page-not-found.component").then(module => module.PageNotFoundComponent)
  }

];
