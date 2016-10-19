import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ArticlesService } from './../articles.service';
import { Article } from './../article';

import 'rxjs/add/operator/take';

import * as moment from 'moment';

@Component({
    selector: 'app-article-details',
    templateUrl: './article-details.component.html',
    styleUrls: ['./article-details.component.less']
})
export class ArticleDetailsComponent implements OnInit {
    article: Article;
    slug: string;

    constructor(private articlesService: ArticlesService,
                private route: ActivatedRoute,
                private titleService: Title
    ) { }

    private getArticle(id: string): void {
        this.articlesService.getArticle(id)
            .take(1)
            .subscribe(
                (article) => {
                    this.article = article;
                    this.titleService.setTitle('SylTi\'s Blog - ' + article.title);
                }, (err) => this.handleError(err)
            );
    }

    private handleError(error) {
        console.error(error);
        // return Observable.throw(error.json().error || 'Server error');
    }

    getDate(date: string): string {
        return moment(date).format('MMMM DD, YYYY');
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            // let id = +params['id']; // convert string into number
            this.slug =  params['id'];
            this.getArticle(this.slug);
        });
    }

}
