import React from "react";
import { Text, View, FlatList } from "react-native";
import HomeItem from "../components/HouseItem";
import { MOCK_DATA } from "../db/mockData";

export default HomeListScreen = () => {
  return (
    <FlatList
      data={MOCK_DATA}
      renderItem={({item}) => <HomeItem {...item}/>}
      // renderItem={({item}) => <HomeItem images={item.images} name={item.name} address={item.address}/>}
    keyExtractor={(item, index) => index.toString()}
    />
  );
};
{/* <HomeItem
images="http://i.hmp.me/m/a35213a69cc3560dc2a7342749f524b1.jpg"
name=" Mr. Johns Conch house"
address=" 12th Street,
Neverland"
/> */}

// return (
//   <FlatList
//     data={MOCK_DATA}
//     keyExtractor={(item) => item.id}
//     renderItem={({ item }) => (
//       <HomeItem image={item.image} name={item.name} address={item.address} />
//     )}
//   />
// );