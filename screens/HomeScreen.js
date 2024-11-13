import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight,
} from "react-native";

const HomeScreen = ({navigation}) => {

    return (
      // <View style={styles.home}>
      <View style={styles.mainContainer}>
        {/* {
          <Button
            title="Go to ScrollView Page"
            onPress={() => this.props.navigation.navigate("ScrollView")}
          />
        } */}
        <TouchableHighlight
          style={styles.topContainer}
          onPress={() => navigation.navigate("HomeList")}
        >
          <Image
            style={styles.homeBanner}
            source={require("../assets/images/house.png")}
          />
        </TouchableHighlight>

        <View style={styles.bottomContainer} />
      </View>
    );
}
const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
  },
  topContainer: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "#CCE5FF",
  },
  bottomContainer: {
    flex: 2,
    // justifyContent: "center",
    backgroundColor: "#FFF",
  },
  homeBanner: {
    flex: 1,
    bottom: 0,
    alignSelf: "stretch",
    width: undefined,
    height: undefined,
  },
});

export default HomeScreen