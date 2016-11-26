import {Component, OnInit, transition} from "@angular/core";
import {TranslateService} from "ng2-translate";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

    constructor(private translate: TranslateService) { }

    ngOnInit() {
    }

    changeLanguage(lang: string) {
        if (lang === 'en' || lang == 'fr')
            this.translate.use(lang);
    }

}
