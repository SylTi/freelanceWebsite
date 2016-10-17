/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ArticlesListComponent } from './articles-list.component';
import { ArticlesService } from '../articles.service';

describe('Component: ArticlesList', () => {
  let articlesServiceStub, fixture, comp, articlesService;
  beforeEach(() => {
    articlesServiceStub = [{id: 1, title: 'Title', text: 'blabla'}];

    TestBed.configureTestingModule({
      providers: [ {provide: ArticlesService, useValue: articlesServiceStub } ]
    });

    fixture = TestBed.createComponent(ArticlesListComponent);
    comp    = fixture.componentInstance;

    // UserService from the root injector
    articlesService = TestBed.get(ArticlesService);
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });
});
