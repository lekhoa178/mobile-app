import { checkToken, getAccountById, updateAccountApi } from "./ApiService";

export const getAccountByAccountId = async function(accountId) {
  return await getAccountById(accountId);
};
export const updateAccount = async function(account) {
  return await updateAccountApi(account);
};
export const checkTokenExpired = async function(token) {
  console.log("Into checkTokenExpired", token);
  return await checkToken(token);
};
