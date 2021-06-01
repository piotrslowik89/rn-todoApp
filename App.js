import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import AddNew from "./src/containers/AddNew";
import TodoList from "./src/containers/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { id: "1", text: "Lorem" },
        { id: "2", text: "Ipsum" },
        { id: "3", text: "Dolor" },
      ],
    };
  }
  render() {
    return (
      <View style={{ marginTop: 20, height: "100%" }}>
        <TodoList
          list={this.state.list}
          onDelete={(itemId) => {
            var list = [...this.state.list];
            var index = 0;

            list.forEach((item, itemIndex) => {
              if (item.id !== itemId) {
                return;
              }
              index = item.Index;
              return false;
            });
            list.splice(index, 1);

            this.setState({ list });
          }}
        />
        <AddNew
          onPress={(text) => {
            var list = [...this.state.list];

            list.push({
              id: Math.random() + '',
              text: text,
            });
            this.setState({ list });
          }}
        />
      </View>
    );
  }
}
export default function () {
  return <App />;
}
