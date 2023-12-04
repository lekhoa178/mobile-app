
export const setWords = payload => ({
  type: "SET_WORDS",
  payload
});

export const setSearchWords = payload => {
  return {
    type: "SET_SEARCH_WORDS",
    payload: payload
  }
}
export const setWordDetail = payload => {
  return {
    type:"SET_WORD_DETAILS",
    payload
  }
}