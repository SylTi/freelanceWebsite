import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteractiveFormComponent } from './interactive-form/interactive-form.component';
import { HomePageComponent } from './home-page/home-page.component'

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/form',
        pathMatch: 'full'
    },
    {
        path: 'form',
        component: InteractiveFormComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
