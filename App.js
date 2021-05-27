import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  var list = [
    { id: "1", text: "Lorem" },
    { id: "2", text: "Ipsum" },
    { id: "3", text: "Dolor" },
  ];

  return (
    <View style={{marginTop:20, height:'100%'}}>
      <FlatList data={list}
        renderItem={(position) => {
          return (
            <View key={position.item.id}
            style={{width:'100%', padding:15, borderButton:'1px',borderBottomColor:'black',flexDirection:'row'}}>
             
             <View style={{width:'80%'}}>
               <Text style={{fontSize:20, alignSelf:'center'}}>{position.item.text}</Text>
               </View>
               <View style={{width:'20%'}}>
                 <Text style={{fontSize:20,alignSelf:'center'}}>X</Text>
                 </View>
            </View>
          );
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
