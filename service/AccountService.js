import { getAccountById } from "./ApiService";

export const getAccountByAccountId = async function(accountId) {
  return await getAccountById(accountId);
};
