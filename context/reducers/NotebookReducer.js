const initialState = {
    notebooks: []
};

const notebookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NOTEBOOKS":
            return {
                ...state,
                notebooks: action.payload};

        default:
            return state;
    }
};
export default notebookReducer;
