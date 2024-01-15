import {
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold,
  useFonts,
} from "@expo-google-fonts/oswald";
import { Image, ImageBackground, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Input } from "../components/ui/input";
import { useNavigation } from "@react-navigation/native";

export function ClientRegister() {
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
  return (
    <View className="w-full h-full">
      <ImageBackground
        className="w-full bg-cover bg-no-repeat  h-full justify-end"
        source={require("../../assets/home.png")}
      >
        <ImageBackground
          className="w-full  h-[90vh]"
          source={require("../../assets/elipse.png")}
        >
          <Image
            className="w-28 ml-3 h-28"
            source={require("../../assets/logo.png")}
          />
          <TouchableOpacity className="w-[360px] h-14  bg-zinc-800 flex-row mt-8 rounded-md items-center  justify-center mx-auto">
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
          <Input placeholder="Nome" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Input placeholder="Confirmar Senha" />
          <TouchableOpacity className="w-[360px] h-14 bg-secondary flex-row mt-8 rounded-md items-center  justify-center mx-auto">
            <Text
              style={{ fontFamily: "Oswald_600SemiBold" }}
              className="text-white mx-auto  text-lg"
            >
              Cadastrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" mt-4 mx-auto"
            onPress={() => navigate("client-login")}
          >
            <Text
              style={{ fontFamily: "Oswald_600SemiBold" }}
              className="text-zinc-300 text-xs"
            >
              Ja possui uma conta?{" "}
              <Text className="text-primary font-medium text-xs">Entre</Text>
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}
