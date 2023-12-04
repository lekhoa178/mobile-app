export class Sentence {
    constructor(english, vietnamese) {
        this._english = english;
        this._vietnamese = vietnamese;
    }

    get english() {
        return this._english;
    }

    set english(value) {
        this._english = value;
    }

    get vietnamese() {
        return this._vietnamese;
    }

    set vietnamese(value) {
        this._vietnamese = value;
    }
}
