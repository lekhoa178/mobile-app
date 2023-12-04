import { searchWord } from "./ApiService";
import { Synset } from "../models/synset";

export const searchByWord = async function(word) {
  let result = [];
  const ListWords = await searchWord(word);
  for (let i = 0; i < ListWords.length; i++) {
    let id = ListWords[i].id.synsetId;
    let word = ListWords[i].word;
    let def = ListWords[i].synset.definition;
    result.push(new Synset(id, word, def));
  }
  console.log("Result");
  console.log(result);
  return result;
};
