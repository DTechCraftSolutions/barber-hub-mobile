import { TextInput } from "react-native";
import {
  useFonts,
  Oswald_400Regular,
  Oswald_700Bold,
  Oswald_600SemiBold,
  Oswald_500Medium,
} from "@expo-google-fonts/oswald";

interface Props {
  className?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  cursorColor?: string;
  selectionColor?: string;
  onChangeText?: any;
  value?: string;
  fontWheight?: 400 | 700 | 600 | 500;
  rest?: any;
}
export function Input({
  rest,
  className,
  placeholder,
  placeholderTextColor,
  fontWheight,
  cursorColor,
  selectionColor,
  onChangeText,
  value,
}: Props) {
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
    <TextInput
      {...rest}
      value={value}
      onChangeText={onChangeText}
      style={{
        fontFamily: `${
          fontWheight === 400
            ? "Oswald_400Regular"
            : fontWheight === 700
            ? "Oswald_700Bold"
            : fontWheight === 600
            ? "Oswald_600SemiBold"
            : "Oswald_500Medium"
        }`,
      }}
      selectionColor={"#F33434"}
      placeholder={placeholder}
      placeholderTextColor={"#9CA3AF"}
      cursorColor={"#fff"}
      className="w-[360px] h-14 border border-secondary text-white text-lg px-4 mt-4 rounded-md mx-auto"
    />
  );
}
