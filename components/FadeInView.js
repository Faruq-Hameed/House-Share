//Animation component

import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";

export const FadeInView = (props) => {
  const [fadeIn] = useState(new Animated.Value(0));


  return (
    <Animated.View style={{ ...props.style, opacity: fadeIn }}>
      {props.children}
    </Animated.View>
  );
};
