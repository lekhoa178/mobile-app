export class Synset {
    constructor(definition, examples,synonyms,antonyms) {
        this._definition = definition;
        this._examples = examples;
        this._synonyms = synonyms;
        this._antonyms = antonyms;
    }


    get definition() {
        return this._definition;
    }

    set definition(value) {
        this._definition = value;
    }

    get examples() {
        return this._examples;
    }

    set examples(value) {
        this._examples = value;
    }

    get synonyms() {
        return this._synonyms;
    }

    set synonyms(value) {
        this._synonyms = value;
    }

    get antonyms() {
        return this._antonyms;
    }

    set antonyms(value) {
        this._antonyms = value;
    }
}
