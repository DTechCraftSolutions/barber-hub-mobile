import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setToken(token: string) {
  await AsyncStorage.setItem("userToken", JSON.stringify(token));
}

export async function getToken() {
  return await AsyncStorage.getItem("userToken");
}

export async function removeToken() {
  await AsyncStorage.removeItem("userToken");
}
