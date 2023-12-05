export const setAccountId = payload => {
    console.log("Action set account:",payload);
    return {
        type: "SET_ACCOUNT_ID",
        payload
    }

}