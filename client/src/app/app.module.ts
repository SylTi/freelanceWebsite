import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { ArticlesService } from './articles/articles.service';
// import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
// import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { ArticlesService, ArticlesListComponent, ArticleDetailsComponent } from './articles';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
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
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
