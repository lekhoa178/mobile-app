export const setNotebooks = payload => {
    return {
        type: "SET_NOTEBOOKS",
        payload
    }

}
export const addNotebook = payload => {
    return {
        type: "ADD_NOTEBOOK",
        payload
    }
}

export const removeNotebook = payload => {
    return {
        type: "REMOVE_NOTEBOOK",
        payload
    }
}