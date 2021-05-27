import { StatusBar } from "expo-status-bar";
import React from "react";
import { TextInput, FlatList, StyleSheet, Text, View, Button } from "react-native";
import AddNew from './src/containers/AddNew'
import TodoList from './src/containers/TodoList'

export default function App() {
  var list = [
    { id: "1", text: "Lorem" },
    { id: "2", text: "Ipsum" },
    { id: "3", text: "Dolor" },
  ];

  return (
    <View style={{marginTop:20, height:'100%'}}>
      <TodoList list={list} />
      <AddNew/>
    </View>
  );
}


