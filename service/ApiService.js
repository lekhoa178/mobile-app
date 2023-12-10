import { API_URL } from "../config";
import { AJAX, AJAX_REQUEST } from "../helpers";

export const getAllSynset = async function() { 
  return AJAX(API_URL + "/dictionary/synset");
};

export const searchWord = async function(word) {
  return AJAX(API_URL + `/dictionary/search/${word}/10`);
};

export const getDefinition = async function(word) {
  return AJAX(API_URL + `/dictionary/definition/${word}`);
};

export const getLexicon = async function(synsetId, lexiconNum) {
  return AJAX(API_URL + `/dictionary/lexicon/${synsetId}/${lexiconNum}`);
}

export const getNotebook = async function(accountId) {
  return AJAX(API_URL + `/dictionary/notebook/${accountId}`);
};

export const updateNotebook = async function(word, favorite, accountId) {
  return await AJAX(
    API_URL + `/dictionary/notebook/update/${word}/${favorite?1:0}/${accountId}`,
  );
};

export const getResearch = async function(accountId) {
  return AJAX(API_URL + `/dictionary/research/${accountId}`);
}

export const updateResearch = async function(word, add, accountId) {
  return await AJAX(
      API_URL + `/dictionary/research/update/${word}/${add?1:0}/${accountId}`,
  );
};

export const getStages = async function(accountId) {
  return AJAX(API_URL + `/stage/all/${accountId}`);
}

export const getSentences = async function(stageId, levelId, amount) {
  return AJAX(API_URL + `/cfg/sentences/${stageId}/${levelId}/${amount}`);
}

export const authenticate = async function(username, password) {
  return await AJAX_REQUEST(API_URL + `/api/auth/authenticate`, "POST", {
    username,
    password
  });
};
export const register = async function(username, password) {
  return await AJAX_REQUEST(API_URL + `/api/auth/register`, "POST", {
    email,
    username,
    password
  });
};
export const getAccountByUsername = async function(username) {
  return await AJAX(API_URL + `/dictionary/account/${username}`);
}
