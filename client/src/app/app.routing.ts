import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesListComponent, ArticleDetailsComponent }      from './articles';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/articles',
        pathMatch: 'full'
    },
    {
        path: 'articles',
        component: ArticlesListComponent
    },
    {
        path: 'articles/:id',
        component: ArticleDetailsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
