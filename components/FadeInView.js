//Animation component

import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";

export const FadeInView = (props) => {
  const [fadeIn] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, [fadeIn]); // Empty dependency array ensures this effect runs once after initial render)

  return (
    <Animated.View style={{ ...props.style, opacity: fadeIn }}>
      {props.children}
    </Animated.View>
  );
};
