export class Step {
    level: number;
    parentResult: string;
    title: string;
    type: string;
    itemsToDisplay: any[];

    constructor(level: number, parentResult: string, title: string, type: string, itemsToDisplay: any[]) {
        this.level = level;
        this.parentResult = parentResult;
        this.title = title;
        this.type = type;
        this.itemsToDisplay = itemsToDisplay;
    }
}
