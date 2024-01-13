import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

export function ClientLogin({ navigation }: any) {
    return (
        <ImageBackground className="w-screen h-screen justify-end" source={require('../../assets/home.png')}> 
        <ImageBackground className="w-full h-[80vh]" source={require('../../assets/elipse.png')}>
            <Image className="w-28 h-28" source={require('../../assets/logo.png')} />
            <TouchableOpacity className="w-3/4 mt-8 mx-auto flex justify-center items-center text-white h-14 rounded bg-zinc-800">
                <Text className="text-white text-lg font-medium">Entrar com google</Text>
            </TouchableOpacity>
             
        </ImageBackground>
    </ImageBackground>

    )
}