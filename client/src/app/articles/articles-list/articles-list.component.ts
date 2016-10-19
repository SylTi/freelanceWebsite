import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Article } from './../../articles';
import { ArticlesService } from './../articles.service';

import * as moment from 'moment';
// import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'app-articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.less']
})
export class ArticlesListComponent implements OnInit {
    articles: Article[];

    totalItems: number = 64;
    currentPage: number = 1;

    maxSize: number = 5;
    bigTotalItems: number = 175;
    bigCurrentPage: number = 1;

    constructor(
        private articlesService: ArticlesService,
        private titleService: Title
    ) {}

    private getArticles(): void {
        this.articlesService.getArticles()
            .then(
                (articles) => this.articles = articles,
                this.handleError
            );
    }

    getDate(date: string): string {
        return moment(date).format('MMMM DD, YYYY');
    }

    getText(text: string): string {
        let length = Math.round(text.length * 0.3);
        return text.substring(0, length) + ' ...';
    }

    setPage(pageNo: number): void {
        this.currentPage = pageNo;
    };

    pageChanged(event: any): void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };

    private handleError(error) {
        console.error(error);
    }

    ngOnInit() {
        this.titleService.setTitle('SylTi\'s Blog - Articles list');
        this.getArticles();
        console.log('articles: ', this.articles);
    }

}
