export class Question {
    title: string;
    tooltip: string;
    placeholder: string;

    constructor(title: string,  tooltip: string = '', placeholder:string = '') {
        this.title = title;
        this.tooltip = tooltip;
        this.placeholder = placeholder;
    }
}
