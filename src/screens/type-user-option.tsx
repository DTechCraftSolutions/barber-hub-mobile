import { Image, ImageBackground, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function TypeUserOption() {
    return (
        <ImageBackground className="w-screen h-screen justify-end" source={require('../../assets/home.png')}> 
            <ImageBackground className="w-full h-[80vh]" source={require('../../assets/elipse.png')}>
                <Image className="w-28 h-28" source={require('../../assets/logo.png')} />
                <Text className="text-white mx-auto font-bold my-20 text-3xl">Seja bem-vindo &#40;a&#41;</Text>
                <TouchableOpacity className="w-72 h-12 bg-secondary rounded-md justify-center mx-auto mt-8">
                    <Text className="text-white mx-auto font-semibold text-2xl">Sou cliente</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-72 h-12 bg-secondary rounded-md justify-center mx-auto mt-8">
                    <Text className="text-white mx-auto font-semibold text-2xl">Sou profissional</Text>
                </TouchableOpacity>
            </ImageBackground>
        </ImageBackground>
    )
}