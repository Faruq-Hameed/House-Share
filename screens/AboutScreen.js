import React, { Component } from "react";
import { View, Button,Text, StyleSheet } from "react-native";

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.about}>
        <Text> About screen</Text>
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
        <Button title="Go Home" onPress={() => this.props.navigation.navigate('Home')} />
        <Button title="Go to first page" onPress={() => this.props.navigation.popToTop()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  about: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

/**
 * navigation.navigate('RouteName') pushes a new route to the native stack navigator 
 * if it's not already in the stack, otherwise it jumps to that screen.
We can call navigation.push('RouteName') as many times as we like and it will continue pushing routes.
The header bar will automatically show a back button, 
but you can programmatically go back by calling navigation.goBack(). 
On Android, the hardware back button just works as expected.
You can go back to an existing screen in the stack with navigation.navigate('RouteName'), 
and you can go back to the first screen in the stack with navigation.popToTop().
The navigation prop is available to all screen components 
(components defined as screens in route configuration and rendered by React Navigation as a route).
 */