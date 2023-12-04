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

export const getNotebook = async function(accountId) {
  return AJAX(API_URL + `/dictionary/notebook/${accountId}`);
};

export const deleteNotebook = async function(accountId, synsetId, lexiconNum) {
  return AJAX(
    API_URL + `/dictionary/notebook/${accountId}/${synsetId}/${lexiconNum}`
  );
};

export const addNotebook = async function(notebook) {
  return AJAX (API_URL + `dictionary/notebook`,"POST",notebook);
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
