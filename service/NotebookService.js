import {getNotebook} from "./ApiService";


export const getAllNotebookFromAccount = async (accountId) => {
    return await getNotebook(accountId);
}
// export const ge