import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image,TouchableHighlight } from "react-native";

export default class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (

      // <View style={styles.home}>
      <View style={styles.mainContainer}>
        {/* <Text> Home Screen</Text>
        <Button title="Go to About Page" onPress={()=> this.props.navigation.navigate('About')}/> */}
        <TouchableHighlight style={styles.topContainer} onPress={()=>navigate('HomeList')}>
          <Image
            style={styles.homeBanner}
            source={require("../assets/images/house.png")}
          />
        </TouchableHighlight>

        <View style={styles.bottomContainer} />
      </View>
    );
  }
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
