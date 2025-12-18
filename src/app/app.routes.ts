import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Home - QIM WSK',
        component:HomePage
    },
    {
        path: 'products',
        title: 'Products - QIM WSK',
        loadComponent: () => import('./pages/product/product.page').then(m => m.ProductPage)
    },
    {
        path: 'edition',
        title: 'Edition - QIM WSK',
        loadComponent: () => import('./pages/edition/edition.page').then(m => m.EditionPage)
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
