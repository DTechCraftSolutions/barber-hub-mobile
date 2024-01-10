import { StatusBar } from "expo-status-bar";
import {Text, View } from "react-native";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <View  className="bg-black w-screen h-screen mt-8
    ">
      <Routes />
      <StatusBar backgroundColor="black" style="light" />
    </View>
  );
}

