import { StatusBar } from "react-native";
import { View } from "react-native";
import { Routes } from "./src/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";



export default function App() {
  return (
    <View className="w-screen h-[110vh] bg-black">
      <SafeAreaProvider style={{ flex: 1 }}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <Routes />
      </SafeAreaProvider>
    </View>
  );
}
