import { Oswald_400Regular, Oswald_500Medium, Oswald_600SemiBold, Oswald_700Bold } from "@expo-google-fonts/oswald";
import { useFonts } from "expo-font";
import { Image, Text, View } from "react-native";

export function Header() {
    const [fontsLoaded] = useFonts({
        Oswald_400Regular,
        Oswald_700Bold,
        Oswald_600SemiBold,
        Oswald_500Medium
    })
    if (!fontsLoaded) {
        return null
    }
    return (
        <View className="w-full px-2 h-12 items-center justify-between flex-row">
            <Text 
            style={{ fontFamily: 'Oswald_700Bold' }}
            className="text-zinc-400 font-bold">
                Olá Deyvid
            </Text>
            <Image className="w-12 h-12" source={require('../../assets/logo.png')}/>
        </View>
    )
}