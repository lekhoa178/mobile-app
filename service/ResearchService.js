import {
  getLexicon,
  getNotebook,
  getResearch,
  updateResearch
} from "./ApiService";
import { Lexicon } from "../models/Lexicon";
import { Research } from "../models/Research";
import { Notebook } from "../models/Notebook";

export const getAllResearchFromAccount = async accountId => {
  const results = [];
  const nbs = await getResearch(accountId);
  for (let i = 0; i < nbs.length; ++i) {
    const lex = await getLexicon(
      nbs[i].id.lexiconId.synsetId,
      nbs[i].id.lexiconId.lexiconNum
    );
    results.push(
      new Research(
        nbs[i].id.accountId,
        new Lexicon(
          nbs[i].id.lexiconId.synsetId,
          nbs[i].id.lexiconId.lexiconNum,
          lex.word,
          lex.synset.definition
        )
      )
    );
  }
  console.log("Into history", results);
  return results;
};

export const updateResearchModel = (word, add, accountId) => {
  updateResearch(word, add, accountId);
};
