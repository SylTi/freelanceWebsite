import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Step } from "./step";
import { Card } from "./card";
import { Question } from "./question";
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'app-interactive-form',
    templateUrl: './interactive-form.component.html',
    styleUrls: ['./interactive-form.component.less']
})
export class InteractiveFormComponent implements OnInit {
    steps: Step[] = new Array<Step>();
    formResults: Array<Array<string>> = new Array<Array<string>>();

    constructor(
        private titleService: Title,
        private translationService: TranslateService
    ) {

        let itemsStepOne = [
            new Card('BRAND NEW', 'fa-plus', 'You want a landing page, a blog, a reservation site or a full ecommerce site'),
            new Card('UPDATE', 'fa-wrench', 'You need your website to become the leads generating machine you know it can be ?'),
            new Card('AUTOMATION', 'fa-magic', 'You\'ve outgrown your current software and you must jump though hoops to get your job done ?'),
            new Card('HIGHLY SPECIFIC', 'fa-user', 'You need a highly specific web solution (Example: SaaS App) or a Mobile App ?')
        ];
        this.steps.push(new Step(0, '', 'What kind of website does your business need ?', 'card', itemsStepOne));

        let itemsStepBrandNew = [
            new Card('I SELL SERVICES', 'fa-user', 'Examples : Lawyer, hairemaker, Financial services..'),
            new Card('I SELL PRODUCTS', 'fa-gift', 'Examples : Restaurant, Choose seller ...')
        ];
        this.steps.push(new Step(1, 'BRAND NEW', 'What is your business selling ?', 'card', itemsStepBrandNew));

        let itemsStepUpdate = [
            new Card('ONLY LOCALLY', 'fa-handshake-o', 'You want your website to generate more lead for your store or your local agency ?'),
            new Card('ONLINE', 'fa-credit-card', 'You want more visitors turning into paying customers ?')
        ];
        this.steps.push(new Step(1, 'UPDATE', 'Where is your business selling ?', 'card', itemsStepUpdate));

        let itemsStepAutomation = [
            new Question('How much time does your company as a whole loose on those task each day ?','How many hours each employee loose each day x Nb of employees that do that task'),
            new Question('What is the average hourly cost of your employees having this problem ?')
        ];
        this.steps.push(new Step(1, 'AUTOMATION', 'What is the impact on your business ?', 'question', itemsStepAutomation));

        let itemsStepSpecific = [
            new Card('BRAND NEW', 'fa-plus', 'You have a great idea but don\'t have the technical expertise to make it happen ? Let me help !'),
            new Card('REPLACEMENT', 'fa-exchange', 'Your actual product doesn\'t fit your need anymore ? Tell me what you need !')
        ];
        this.steps.push(new Step(1, 'HIGHLY SPECIFIC', 'This highly specific website/mobile app is ', 'card', itemsStepSpecific));
    }

    getResults(formResults: Array<Array<string>>) {
        this.formResults = formResults;
    }

    ngOnInit() {
        this.titleService.setTitle('SylTi - Help us grow your business !');
    }

}
