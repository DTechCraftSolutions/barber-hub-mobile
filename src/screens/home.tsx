import { View, Text } from "react-native";
import { Header } from "../components/header";
import { DateComponent } from "../components/date";
import { useFonts } from "expo-font";
import {
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { FavoriteBarbershopCard } from "../components/favorite-barbershop-card";
import { ScheduleCard } from "../components/schedule-card";

export function Home({ navigation }: any) {
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
    <View className="w-full px-2 h-full pt-8 bg-black">
      <Header />
      <DateComponent />
      <Text
        style={{ fontFamily: "Oswald_600SemiBold" }}
        className="text-white text-lg mt-4"
      >
        Sua Barbearia Favorita
      </Text>
      <FavoriteBarbershopCard />
      <Text
        style={{ fontFamily: "Oswald_600SemiBold" }}
        className="text-white text-lg mt-4"
      >
        Próximo agendamento
      </Text>
      <ScheduleCard />
    </View>
  );
}
