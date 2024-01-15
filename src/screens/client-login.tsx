import { Image, ImageBackground, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  useFonts,
  Oswald_400Regular,
  Oswald_700Bold,
  Oswald_600SemiBold,
  Oswald_500Medium,
} from "@expo-google-fonts/oswald";
import { Input } from "../components/ui/input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import api from "../lib/axios";
import { AxiosError } from "axios";
import { getToken, setToken } from "../lib/asyncStorage";

export function ClientLogin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { navigate } = useNavigation();
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Oswald_700Bold,
    Oswald_600SemiBold,
    Oswald_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }

  async function handleLogin() {
    try {
      const { email, password } = data;
      const response = await api.post("/users/authenticate", {
        email: email,
        password: password,
      });
      setToken(response.data.token);
      navigate("home");
    } catch (error: AxiosError | any) {
      console.error(error.message);
    }
  }
  function handleChangeEmail(text: string) {
    setData({ ...data, email: text });
  }

  function handleChangePassword(text: string) {
    setData({ ...data, password: text });
  }

  return (
    <View className="w-full h-full">
      <ImageBackground
        className="w-full bg-cover bg-no-repeat  h-full justify-end"
        source={require("../../assets/home.png")}
      >
        <ImageBackground
          className="w-full  h-[80vh]"
          source={require("../../assets/elipse.png")}
        >
          <Image
            className="w-28 ml-3 h-28"
            source={require("../../assets/logo.png")}
          />
          <TouchableOpacity
            onPress={() => navigate("home")}
            className="w-[360px] h-14  bg-zinc-800 flex-row mt-8 rounded-md items-center  justify-center mx-auto"
          >
            <Image
              className="w-6 h-6 mr-4"
              source={require("../../assets/google.png")}
            />
            <Text
              style={{ fontFamily: "Oswald_600SemiBold" }}
              className="text-white font-medium text-lg"
            >
              Entre com Google
            </Text>
          </TouchableOpacity>
          <Input
            placeholder="Email"
            onChangeText={(text: string) => handleChangeEmail(text)}
          />
          <Input
            rest={{ secureTextEntry: true }}
            placeholder="Senha"
            onChangeText={(text: string) => handleChangePassword(text)}
          />
          <TouchableOpacity className="w-[360px] mt-4 mx-auto ">
            <Text
              style={{ fontFamily: "Oswald_600SemiBold" }}
              className="text-zinc-300 text-xs"
            >
              Esqueceu a senha?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleLogin()}
            className="w-[360px] h-14 bg-secondary rounded-md mt-4 mx-auto justify-center items-center"
          >
            <Text
              style={{ fontFamily: "Oswald_600SemiBold" }}
              className="text-white font-medium text-lg"
            >
              Entrar
            </Text>
          </TouchableOpacity>
          <View className="w-full h-px bg-secondary mt-12">
            <Text
              style={{ fontFamily: "Oswald_600SemiBold" }}
              className="bg-black mx-auto h-10 relative bottom-4  text-xl px-4 text-white z-20"
            >
              Ou
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigate("client-register")}
            className="mt-8 mx-auto"
          >
            <Text
              style={{ fontFamily: "Oswald_600SemiBold" }}
              className="text-secondary text-lg  underline"
            >
              Registre-se
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}
