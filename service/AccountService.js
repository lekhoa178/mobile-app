import { getAccountById, updateAccountApi } from "./ApiService";

export const getAccountByAccountId = async function(accountId) {
  return await getAccountById(accountId);
};
export const updateAccount = async function(account) {
  return await updateAccountApi(account);
};
