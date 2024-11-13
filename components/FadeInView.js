//Animation component

import React from "react";
import { Animated, Text, View } from "react-native";

export class FadeInView extends React.PureComponent {
  state = {
    fadeIn: new Animated.Value(0),
  };
  componentDidMount() {
    Animated.timing(this.state.fadeIn, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }
  render() {

    return (
      <Animated.View
        style={{ ...this.props.style, opacity: this.state.fadeIn }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

