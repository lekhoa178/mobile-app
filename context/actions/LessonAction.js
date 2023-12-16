export const setStages = payload => ({
    type: "SET_STAGES",
    payload
});

export const getStages = () => ({
    type: "GET_STAGES"
});

export const setId = payload => ({
    type: "SET_ID",
    payload
});

export const getId = () => ({
    type: "GET_ID"
});

export const setAnswerSentence = payload => ({
    type: "SET_ANS_SEN",
    payload
})

export const setOptionSentence = payload => ({
    type: "SET_OPT_SEN",
    payload
})

export const setCorrectAnswer = payload => ({
    type: "SET_CORRECT_ANS",
    payload
})
export const setRefresh = () => ({
    type:"SET_REFRESH"
})