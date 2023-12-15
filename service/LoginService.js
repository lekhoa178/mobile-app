import { authenticate, register, getAccountByUsername } from "./ApiService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../RootNavigation";

// Lấy token từ AsyncStorage

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem("token");

    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};
const storeToken = async token => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    console.log("Error setting token");
  }
};
const storageAccountId = async accountId => {
  try {
    console.log("AccountId: ", accountId);
    await AsyncStorage.setItem("accountId", accountId);
    console.log("Luu account id thanh cong");
  } catch (error) {
    console.log("Error setting accountId");
  }
};

// Xóa token khỏi AsyncStorage

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("token");
    console.log("Token removed");
  } catch (error) {
    console.log(error);
  }
};
const removeAccountId = async () => {
  try {
    await AsyncStorage.removeItem("accountId");
    console.log("Token removed");
  } catch (error) {
    console.log(error);
  }
};
export async function registerService(email, username, password) {
  const result = await register(email, username, password);
}
export async function login(username, password) {
  const result = await authenticate(username, password);
  await storeToken(result.token);
  const account = await getAccountByUsername(username);
  await storageAccountId(account.accountId + "");
  // navigate("HomeScreen");
  return result.token;
}
export async function logout() {
  await removeAccountId();
  await removeToken();
}
