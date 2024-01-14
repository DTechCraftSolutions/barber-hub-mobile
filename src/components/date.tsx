import { format } from "date-fns";
import { Text, View } from "react-native";
import ptBR from 'date-fns/locale/pt-BR'
import { useFonts } from "expo-font";
import { Oswald_400Regular, Oswald_500Medium, Oswald_600SemiBold, Oswald_700Bold } from "@expo-google-fonts/oswald";

export function DateComponent() {
    const [fontsLoaded] = useFonts({
        Oswald_400Regular,
        Oswald_700Bold,
        Oswald_600SemiBold,
        Oswald_500Medium
    })
    if (!fontsLoaded) {
        return null
    }
    const wantedFormat = "EEEE, d 'de' MMMM"
    const date = new Date()
    const formatedDate = format(date, wantedFormat, { locale: ptBR })
    return (
        <View>
            <Text 
            style={{ fontFamily: 'Oswald_600SemiBold' }}
            className="text-white text-2xl mx-auto">{formatedDate}</Text>
        </View>
    )
}