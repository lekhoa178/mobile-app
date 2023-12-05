import {getSentences, getStages} from "./ApiService";
import {Sentence} from "../models/Sentence";
import {Stage} from "../models/Stage";

export const getQAs = async function(stageId, levelId, amount) {
    const results = [];
    const sentences = await getSentences(stageId, levelId, amount);

    for (let i = 0; i < sentences.length; ++i) {
        const [english, vietnamese] = sentences[i].split('/');
        results.push(new Sentence(english, vietnamese));
    }

    return results;
}

export const getStageModels = async function(accountId) {
    const results = [];
    const stages = await getStages(accountId);

    for (let i = 0; i < stages.length; ++i) {
        results.push(new Stage(stages[i].stageId, stages[i].title, stages[i].depiction, stages[i].levels));
    }

    return results;
}