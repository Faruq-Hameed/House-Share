import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default HomeItem = (props) => {
  return (
    <View style={styles.row}>
      <View>
        <Image source={{ uri: props.images }} style={styles.thumbnail} />
      </View>
      <View style={styles.rightBox}>
        <Text style={styles.name}> {props.name}</Text>
        <Text>{props.address}</Text>
      </View>
    </View>
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
