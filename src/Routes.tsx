import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./Home";
import Ordens from "./Ordens";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#fff",
          },
        }}
      >
        <Stack.Screen name="Inicio" component={Home}></Stack.Screen>
        <Stack.Screen name="Ordens" component={Ordens}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
