import { API_URL } from '../config';
import { AJAX } from '../helpers';

export const getAllSynset = async function () {
  return AJAX(API_URL + '/dictionary/synset');
};

export const searchWord = async function (word) {
  return AJAX(API_URL + `/dictionary/search/${word}/6`);
};

export const getDefinition = async function (word) {
  return AJAX(API_URL + `/dictionary/definition/${word}`);
};

export const getNotebook = async function(accountId) {
  return AJAX(API_URL + `/dictionary/notebook/${accountId}`);
}

export const deleteNotebook = async function(accountId, synsetId, lexiconNum) {
  return AJAX(API_URL + `/dictionary/notebook/${accountId}/${synsetId}/${lexiconNum}`);
}

export const addNotebook = async function(accountId, synsetId, lexiconNum) {
  return;
}

export const authenticate = async function(username,password){
  return await AJAX(API_URL + `/api/auth/authenticate`,'POST',{ username, password });

}
export const register = async function (username,password) {
  const result = AJAX(API_URL + `/api/auth/register`);
  console.log(result);
}