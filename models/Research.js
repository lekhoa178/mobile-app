export class Research {
    constructor(accountId, lexicon) {
        this._lexicon = lexicon;
        this._accountId = accountId;
    }


    get accountId() {
        return this._accountId;
    }

    set accountId(value) {
        this._accountId = value;
    }

    get lexicon() {
        return this._lexicon;
    }

    set lexicon(value) {
        this._lexicon = value;
    }
}
