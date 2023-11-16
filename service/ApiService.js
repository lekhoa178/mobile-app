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
