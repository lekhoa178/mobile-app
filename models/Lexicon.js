export class Lexicon {
    constructor(synsetId, lexiconNum, word, definition) {
        this._synsetId = synsetId;
        this._lexiconNum = lexiconNum;
        this._word = word;
        this._definition = definition;
    }


    get synsetId() {
        return this._synsetId;
    }

    set synsetId(value) {
        this._synsetId = value;
    }

    get lexiconNum() {
        return this._lexiconNum;
    }

    set lexiconNum(value) {
        this._lexiconNum = value;
    }

    get word() {
        return this._word;
    }

    set word(value) {
        this._word = value;
    }

    get definition() {
        return this._definition;
    }

    set definition(value) {
        this._definition = value;
    }
}