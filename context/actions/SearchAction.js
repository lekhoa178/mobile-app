
export const setWords = payload => ({
  type: "SET_WORDS",
  payload
});

export const getWords = () => ({
  type: "GET_WORDS"
});
export const setSearchWords = payload => {
  return {
    type: "SET_SEARCH_WORDS",
    payload: payload
  }
}