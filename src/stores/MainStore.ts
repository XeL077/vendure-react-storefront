import {action, makeObservable, observable} from "mobx";
export class MainStore {
    constructor() {
        makeObservable(this);
    }
    @observable
    count: number = 0;

    @action
    changeTest = (newCount: number) => {
        this.count = newCount;
    }
}
