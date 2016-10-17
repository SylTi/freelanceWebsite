import { Injectable } from '@angular/core';
import { /* Headers, */ Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Article } from './../articles';

@Injectable()
export class ArticlesService {
    private articlesUrl: string = 'blog/api/articles/';
    // private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getArticles(): Promise<Article[]> {
        return this.http.get(this.articlesUrl)
            .toPromise()
            .then(response => response.json() as Article[])
            .catch(this.handleError);
    }

    getArticle(id: string): Observable<Article> {
        return this.http.get(this.articlesUrl + id)
            .map(response => response.json() as Article);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
