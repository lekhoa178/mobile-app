export const setResearches = payload => {
    return {
        type: "SET_RESEARCHES",
        payload
    }

}
export const addResearch = payload => {
    return {
        type: "ADD_RESEARCH",
        payload
    }
}

export const removeResearch = payload => {
    return {
        type: "REMOVE_RESEARCH",
        payload
    }
}