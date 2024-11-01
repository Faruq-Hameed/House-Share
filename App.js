import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "./AppNavigator";


const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
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
