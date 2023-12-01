const initialState = {
  words: ""
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WORDS":
      return { ...state, 
        words: action.payload };
    case "GET_WORDS":
      return { ...state };
    default:
      return state;
  }
};
export default searchReducer;
