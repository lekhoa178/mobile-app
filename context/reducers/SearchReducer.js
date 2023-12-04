const initialState = {
  words: "",
  wordResult:[],
  wordDetail:""
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WORDS":
      return { ...state, 
        words: action.payload };
    case "GET_WORDS":
      return { ...state };
    case "SET_SEARCH_WORDS":
      console.log("Payload: ", action.payload);
      return {
        ...state,
        wordResult: action.payload
      }
    case "SET_WORD_DETAILS":
      return {
        ...state,
        wordDetail: action.payload
      }
    default:
      return state;
  }
};
export default searchReducer;
