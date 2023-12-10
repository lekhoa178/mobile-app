const initialState = {
    notebooks: []
};

const notebookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NOTEBOOKS":
            return {
                ...state,
                notebooks: action.payload};
        case "REMOVE_NOTEBOOK":
            const nbs = state.notebooks.filter(book => book.lexicon.word !== action.payload);
            return {
                ...state,
                notebooks: nbs
            }

        case "ADD_NOTEBOOK":
            return {
                ...state,
                notebooks: [...state.notebooks, action.payload]
            }

        default:
            return state;
    }
};
export default notebookReducer;
