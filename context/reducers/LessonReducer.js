const initialState = {
    stages: [],
    id: {},
    answerSentence: [],
    optionSentence: [],
    correctAns: 0
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

        case "SET_ANS_SEN":
            return { ...state,
                answerSentence: action.payload };

        case "SET_OPT_SEN":
            return { ...state,
                optionSentence: action.payload };
        case "SET_CORRECT_ANS":
            return {
                ...state,
                correctAns: action.payload};

        default:
            return state;
    }
};
export default lessonReducer;
