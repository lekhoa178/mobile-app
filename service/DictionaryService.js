import {getLexicon, searchWord} from "./ApiService";
import { Synset } from "../models/Synset";
import {getDefinition} from "./ApiService";
import {Research} from "../models/Research";
import {getAccountId} from "../helpers";
import {Lexicon} from "../models/Lexicon";

export const searchByWord = async function(word) {
  let result = [];
  const ListWords = await searchWord(word);
  const accountId = await getAccountId();
  for (let i = 0; i < ListWords.length; i++) {
    result.push(new Research(accountId, new Lexicon(ListWords[i].id.synsetId, ListWords[i].id.lexiconNum, ListWords[i].word,
        ListWords[i].synset.definition)));
  }
  return result;
};
export const getDefinitionModel = async function(word){
  return await getDefinition(word);
}