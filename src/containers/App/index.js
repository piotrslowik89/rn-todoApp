import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import AddNew from "./../AddNew";
import TodoList from "./../TodoList";
import { styles } from "./styles";

class App extends React.Component {
  render() {
    return (
      <View style={styles.appWrapper}>
        <TodoList />
        <AddNew />
      </View>
    );
  }
}
export default App;
