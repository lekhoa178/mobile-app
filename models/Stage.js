import title from "../components/ui/Title";

export class Stage {
    constructor(stageId, title, depiction, levels) {
        this._stageId = stageId;
        this._title = title;
        this._depiction = depiction;
        this._levels = levels
    }

    get stageId() {
        return this._stageId;
    }

    set stageId(value) {
        this._stageId = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get depiction() {
        return this._depiction;
    }

    set depiction(value) {
        this._depiction = value;
    }

    get levels() {
        return this._levels;
    }

    set levels(value) {
        this._levels = value;
    }
}