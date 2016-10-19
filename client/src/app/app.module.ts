import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { ArticlesService, ArticlesListComponent, ArticleDetailsComponent } from './articles';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './articles/sidebar/sidebar.component';
import { routing } from './app.routing';


@NgModule({
    declarations: [
        AppComponent,
        ArticlesListComponent,
        ArticleDetailsComponent,
        NavbarComponent,
        SidebarComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PaginationModule,
        routing
    ],
    providers: [
        ArticlesService,
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
