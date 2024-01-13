import { Image, ImageBackground, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function TypeUserOption({ navigation }: any) {
    return (
        <View className="w-full h-full">
            <ImageBackground className="w-full bg-cover bg-no-repeat  h-full justify-end" source={require('../../assets/home.png')}>
                <ImageBackground className="w-full  h-[80vh]" source={require('../../assets/elipse.png')}>
                    <Image className="w-28 ml-3 h-28" source={require('../../assets/logo.png')} />
                    <Text className="text-white mx-auto font-bold my-20 text-3xl">Seja bem-vindo &#40;a&#41;</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('client-login')}
                        className="w-72 h-12 bg-secondary rounded-md justify-center mx-auto mt-8">
                        <Text className="text-white mx-auto font-semibold text-2xl">Sou cliente</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-72 h-12 bg-secondary rounded-md justify-center mx-auto mt-8">
                        <Text className="text-white mx-auto font-semibold text-2xl">Sou profissional</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ImageBackground>
        </View>
    )
}