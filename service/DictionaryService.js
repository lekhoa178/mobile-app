import { searchWord } from "./ApiService";
import { Synset } from "../models/synset";
import {getDefinition} from "./ApiService";

export const searchByWord = async function(word) {
  let result = [];
  const ListWords = await searchWord(word);
  for (let i = 0; i < ListWords.length; i++) {
    let id = ListWords[i].id.synsetId +  " " + ListWords[i].id.lexiconNum;
    let word = ListWords[i].word;
    let def = ListWords[i].synset.definition;
    result.push(new Synset(id, word, def));
  }
  return result;
};
export const getDefinitionModel = async function(word){
  return await getDefinition(word);
}