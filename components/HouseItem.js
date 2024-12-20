import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {FadeInView} from './FadeInView'
export default HomeItem = (props) => {
  return (
    <FadeInView style={styles.row} >
      <Image source={{ uri: props.images }} style={styles.thumbnail} />
      <View style={styles.rightBox}>
        <Text style={styles.name}> {props.name}</Text>
        <Text>{props.address}</Text>
      </View>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-around",
    backgroundColor: "#F5FCFF",
    borderWidth: 1,
    borderColor: "#d6d7da",
    paddingLeft: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },

  rightBox: {
    flex: 1,
    // justifyContent: "center",
    // rowGap: 8,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
  },
  address: {
    // textAlign: "center",
  },
});
