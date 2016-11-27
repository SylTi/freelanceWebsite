import {Component, OnInit, transition, Input} from "@angular/core";
import {TranslateService} from "ng2-translate";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
    @Input() isScrolled: boolean;
    constructor(private translate: TranslateService) { }

    ngOnInit() {
    }

    changeLanguage(lang: string) {
        console.log('isScroller: ', this.isScrolled);
        if (lang === 'en' || lang == 'fr')
            this.translate.use(lang);
    }

}
