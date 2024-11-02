import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import HomeListScreen from "./screens/HomeListScreen";

const Stack = createNativeStackNavigator();

export default class AppNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          //Any options passed here will apply globally to all screens in the Stack.Navigator.
          headerTitleAlign: "center", //Ensures that the title is centered on all screens.
          headerStyle: {
            backgroundColor: "#48BBEC", // Sets the header background color to blue
          },
          headerTintColor: "#fff", // Sets the color of the back button and title to white
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="About" component={AboutScreen} />

        <Stack.Screen
          name="HomeList"
          component={HomeListScreen}
          options={{ title: "Home List" }}
        />
      </Stack.Navigator>
    );
  }
}

/**
 * createNativeStackNavigator is a function that returns an object containing 2 properties: 
 * Screen and Navigator. Both of them are React components used for configuring the navigator. 
 * The Navigator should contain Screen elements as its children to define the configuration for routes.
NavigationContainer is a component which manages our navigation tree and contains the navigation state.
This component must wrap all navigators structure. Usually, 
we'd render this component at the root of our app, 
which is usually the component exported from App.js.
 */
