const initialState = {
    stages: [],
    id: {}
};

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_STAGES":
            return { ...state,
                stages: action.payload };
        case "GET_STAGES":
            return { ...state };

        case "SET_ID":
            return { ...state,
                id: action.payload };
        case "GET_ID":
            return { ...state };

        default:
            return state;
    }
};
export default lessonReducer;
