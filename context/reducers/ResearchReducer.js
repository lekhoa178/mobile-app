const initialState = {
    researches: []
};

const researchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_RESEARCHES":
            return {
                ...state,
                researches: action.payload};
        case "REMOVE_RESEARCH":
            const researches = state.researches.filter(research => research.lexicon.word !== action.payload);
            return {
                ...state,
                researches: researches
            }

        case "ADD_RESEARCH":
            return {
                ...state,
                researches: [...state.researches, action.payload]
            }

        default:
            return state;
    }
};
export default researchReducer;
