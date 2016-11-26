import {
    Component, OnInit, Input, Output, EventEmitter,
    trigger, state, transition, style, animate
} from '@angular/core';
import { Step } from "../step";

@Component({
    selector: 'app-interactive-form-generator',
    templateUrl: './interactive-form-generator.component.html',
    styleUrls: ['./interactive-form-generator.component.less'],
    // host: { '[@routeAnimation]': 'true' },
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}), animate(100)
            ]),
            transition('* => void', [
                animate(100, style({transform: 'translateX(100%)'}))
            ])
        ]),
        trigger('isVisibleChanged', [
            state('*' , style({ opacity: 1, transform: 'scale(1.0)' })),
            transition('void => *', [
                style({ opacity: 0, transform: 'scale(0.0)'}), animate(300)
            ]),
            transition('* => void', [
                animate(10000, style({ opacity: 0.5, transform: 'scale(0.0)'}))
            ])
        ])
    ]
})
export class InteractiveFormGeneratorComponent implements OnInit {
    @Input("steps") steps: Step[];
    @Output() formResults = new EventEmitter<Array<Array<string>>>();

    clickedCard: string = '';
    currentStep: number = 1;
    nbSteps: number;
    results: Array<Array<string>> = new Array<Array<string>>();

    constructor() { }

    ngOnInit() {
        this.nbSteps = this.getNumberOfSteps();
        for (let i = 0; i <= this.nbSteps-1; i++) {
            this.results.push([]);
        }
    }

    clickCard(card: string) {
        if (this.clickedCard === card)
            this.clickedCard = '';
        else
            this.clickedCard = card;
    }

    nextStep() {
        if (this.getCurrentStep().type === 'card') {
            this.results[this.currentStep-1] = [this.clickedCard];
            this.clickedCard = '';
        }

        if (this.getCurrentStep().type === 'question')
        {

        }
        if (this.currentStep !== this.nbSteps)
            this.currentStep++;
        else
            this.formResults.emit(this.results);

    }

    getCurrentStepItems() {
        if (this.currentStep === 1)
            return this.steps[this.currentStep-1].itemsToDisplay;
        else {
            let stepResult = this.getCurrentStep();
            if (!stepResult)
                return [];
            return stepResult.itemsToDisplay;
        }
    }

    getNumberOfSteps() {
        return this.steps[this.steps.length-1].level+1;
    }

    getBootStrapClass() {
        let length = this.getCurrentStepItems().length;
        if (length === 2)
            return 'col-md-6';
        else if (length === 3)
            return 'col-md-4';
        return 'col-md-3';
    }

    getCurrentStep() {

        if (!this.results.length)
            return this.steps[0];
        let currentStepReal = this.currentStep-2 >= 0 ? this.currentStep-2 : 0;
        let step = this.steps.find(
            (item) => {
                if (!this.results[currentStepReal])
                { console.log(currentStepReal); return false}
                return (item.parentResult === this.results[currentStepReal][0]);
            });
        if (!step)
            return this.steps[0];
        return step;
    }

    getCurrentStepType() {
        let stepResult = this.getCurrentStep();
        if (!stepResult)
            return "";
        return stepResult.type;
    }

    checkQuestions() {
        if (this.steps[this.currentStep-1].itemsToDisplay.length === this.results[this.currentStep-1].length) {
            return !this.results[this.currentStep-1].some((item) => (parseInt(item) <= 0) || item === null)
        }
        return false;
    }
}
