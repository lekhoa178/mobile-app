import {getSentences} from "./ApiService";
import {Sentence} from "../models/Sentence";

export const getQAs = async function(stageId, levelId, amount) {
    const results = [];
    const sentences = await getSentences(stageId, levelId, amount);
    console.log(sentences);
    for (let i = 0; i < sentences.length; ++i) {
        const [english, vietnamese] = sentences[i].split('/');
        results.push(new Sentence(english, vietnamese));
    }

    return results;
}

export const getStageModels = async function(accountId) {
    
}