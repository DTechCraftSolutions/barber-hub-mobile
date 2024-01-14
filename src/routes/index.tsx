import { Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { TypeUserOption } from "../screens/type-user-option";
import { ClientLogin } from "../screens/client-login";
import { ClientRegister } from "../screens/client-register";
import { Home } from "../screens/home";

const Router = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer >
            <Router.Navigator>
                <Router.Screen name="type-user-option" component={TypeUserOption} options={{ headerShown: false }} />
                <Router.Screen name="client-login" component={ClientLogin} options={{ headerShown: false }} />
                <Router.Screen name="client-register" component={ClientRegister} options={{ headerShown: false }} />
                <Router.Screen name="home" component={Home} options={{ headerShown: false }} />
            </Router.Navigator>
        </NavigationContainer>
    )
}