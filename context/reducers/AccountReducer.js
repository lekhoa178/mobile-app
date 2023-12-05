const initialState = {
    accountId: -1,
}
const AccountReducer = (state = initialState,action)=> {
    switch (action.type) {
        case "SET_ACCOUNT_ID":
            return { ...state,
                accountId: action.payload };
        default:
            return state;
    }
}
export default AccountReducer;