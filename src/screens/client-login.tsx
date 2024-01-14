import { Image, ImageBackground, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export function ClientLogin({ navigation }: any) {
    return (
        <View className="w-full h-full">
            <ImageBackground className="w-full bg-cover bg-no-repeat  h-full justify-end" source={require('../../assets/home.png')}>
                <ImageBackground className="w-full  h-[80vh]" source={require('../../assets/elipse.png')}>
                    <Image className="w-28 ml-3 h-28" source={require('../../assets/logo.png')} />
                    <TouchableOpacity className="w-[360px] h-14  bg-zinc-800 flex-row mt-8 rounded-md items-center  justify-center mx-auto">
                        <Image className="w-6 h-6 mr-4" source={require('../../assets/google.png')} />
                        <Text className="text-white font-medium text-lg">
                            Entre com Google
                        </Text>
                    </TouchableOpacity>
                    <TextInput 
                    selectionColor={'#F33434'}
                    placeholder="Email"
                    placeholderTextColor={'#9CA3AF'}
                    cursorColor={'#fff'}
                    className="w-[360px] h-14 border border-secondary text-white text-lg px-4 mt-4 rounded-md mx-auto"/>
                     <TextInput 
                    selectionColor={'#F33434'}
                    placeholder="Senha"
                    placeholderTextColor={'#9CA3AF'}
                    cursorColor={'#fff'}
                    className="w-[360px] h-14 border border-secondary text-white text-lg px-4 mt-4 rounded-md mx-auto"/>
                    <TouchableOpacity className="w-[360px] mt-4 mx-auto ">
                        <Text className="text-zinc-300 text-xs">
                            Esqueceu a senha?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-[360px] h-14 bg-secondary rounded-md mt-4 mx-auto justify-center items-center">
                        <Text className="text-white font-medium text-lg">
                            Entrar
                        </Text>
                    </TouchableOpacity>
                    <View className="w-full h-px bg-secondary mt-12">
                        <Text className="bg-black mx-auto h-10 relative bottom-4 font-bold text-xl px-4 text-white z-20">Ou</Text>
                    </View>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('client-register')}
                    className="mt-8 mx-auto">
                        <Text className="text-secondary text-lg font-bold underline">
                            Registre-se
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ImageBackground>
        </View>
    )
}