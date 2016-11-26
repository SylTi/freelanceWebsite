import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteractiveFormComponent }      from './interactive-form/interactive-form.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/form',
        pathMatch: 'full'
    },
    {
        path: 'form',
        component: InteractiveFormComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
