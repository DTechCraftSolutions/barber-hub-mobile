import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, useAuth } from "../context/auth";

import { TypeUserOption } from "../screens/type-user-option";
import { ClientLogin } from "../screens/client-login";
import { ClientRegister } from "../screens/client-register";
import { Home } from "../screens/home";

const Router = createStackNavigator();

const AuthenticatedStack = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return <RedirectToLogin />;
  }

  return (
    <Router.Navigator>
      <Router.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Router.Navigator>
  );
};
const RedirectToLogin = () => (
  <Router.Navigator>
    <Router.Screen
      name="client-login"
      component={ClientLogin}
      options={{ headerShown: false }}
    />
  </Router.Navigator>
);

export function Routes() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Router.Navigator>
          <Router.Screen
            name="type-user-option"
            component={TypeUserOption}
            options={{ headerShown: false }}
          />
          <Router.Screen
            name="client-login"
            component={ClientLogin}
            options={{ headerShown: false }}
          />
          <Router.Screen
            name="client-register"
            component={ClientRegister}
            options={{ headerShown: false }}
          />
          <Router.Screen
            name="home"
            component={AuthenticatedStack}
            options={{ headerShown: false }}
          />
        </Router.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
