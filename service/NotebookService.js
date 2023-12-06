import {getLexicon, getNotebook, updateNotebook} from "./ApiService";
import {Notebook} from "../models/Notebook";
import {Lexicon} from "../models/Lexicon";


export const getAllNotebookFromAccount = async (accountId) => {
    const results = [];
    const nbs = await getNotebook(accountId);
    for (let i = 0; i < nbs.length; ++i) {
        const lex = await getLexicon(nbs[i].id.lexiconId.synsetId, nbs[i].id.lexiconId.lexiconNum);
        // const lexModel = new Lexicon(lex.synsetId, lex.lexiconNum, lex.word);
        results.push(new Notebook(nbs[i].id.accountId, new Lexicon(nbs[i].id.lexiconId.synsetId,
            nbs[i].id.lexiconId.lexiconNum, lex.word, lex.synset.definition)));
    }

    return results;
}

export const updateNotebookModel = (word, fav, accountId) => {
    updateNotebook(word, fav, accountId);
}

// export const ge