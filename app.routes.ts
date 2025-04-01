import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'products', component: ProductPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', component: NotFoundComponent }
];
