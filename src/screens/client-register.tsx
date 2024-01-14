import { Image, ImageBackground, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export function ClientRegister({ navigation }: any) {
    return (
        <View className="w-full h-full">
            <ImageBackground className="w-full bg-cover bg-no-repeat  h-full justify-end" source={require('../../assets/home.png')}>
                <ImageBackground className="w-full  h-[90vh]" source={require('../../assets/elipse.png')}>
                    <Image className="w-28 ml-3 h-28" source={require('../../assets/logo.png')} />
                    <TouchableOpacity className="w-[360px] h-14  bg-zinc-800 flex-row mt-8 rounded-md items-center  justify-center mx-auto">
                        <Image className="w-6 h-6 mr-4" source={require('../../assets/google.png')} />
                        <Text className="text-white font-medium text-lg">
                            Entre com Google
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                        selectionColor={'#F33434'}
                        placeholder="Nome"
                        placeholderTextColor={'#9CA3AF'}
                        cursorColor={'#fff'}
                        className="w-[360px] h-14 border border-secondary text-white text-lg px-4 mt-4 rounded-md mx-auto" />
                    <TextInput
                        selectionColor={'#F33434'}
                        placeholder="Email"
                        placeholderTextColor={'#9CA3AF'}
                        cursorColor={'#fff'}
                        className="w-[360px] h-14 border border-secondary text-white text-lg px-4 mt-4 rounded-md mx-auto" />
                    <TextInput
                        selectionColor={'#F33434'}
                        placeholder="Senha"
                        placeholderTextColor={'#9CA3AF'}
                        cursorColor={'#fff'}
                        className="w-[360px] h-14 border border-secondary text-white text-lg px-4 mt-4 rounded-md mx-auto" />
                    <TextInput
                        selectionColor={'#F33434'}
                        placeholder="Confirmar Senha"
                        placeholderTextColor={'#9CA3AF'}
                        cursorColor={'#fff'}
                        className="w-[360px] h-14 border border-secondary text-white text-lg px-4 mt-4 rounded-md mx-auto" />
                    <TouchableOpacity className="w-[360px] h-14 bg-secondary flex-row mt-8 rounded-md items-center  justify-center mx-auto">
                        <Text className="text-white mx-auto font-medium text-lg">
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className=" mt-4 mx-auto"
                        onPress={() => navigation.navigate('client-login')}>
                        <Text className="text-zinc-300 text-xs">
                            Ja possui uma conta? <Text className="text-primary font-medium text-xs">Entre</Text>
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ImageBackground>
        </View>
    )
}