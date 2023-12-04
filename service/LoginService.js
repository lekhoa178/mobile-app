import { authenticate, register } from "./ApiService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";

const storeToken = async token => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    console.log("Error setting token");
  }
};
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

// Xóa token khỏi AsyncStorage

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("token");
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
  console.log("Token", result.token);
  await storeToken(result.token);
  console.log(result);
}
