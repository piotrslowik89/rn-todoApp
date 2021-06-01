import React from "react";
import {
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

class TodoList extends React.Component {
  render() {
    return (
      <FlatList
        data={this.props.list}
        renderItem={(item) => {
          return (
            <View key={item.item.id} style={styles.rowContainer}>
              <View style={styles.rowContainerLeft}>
                <Text style={styles.rowContainerText}>
                  {item.item.text}
                </Text>
              </View>
              <View style={styles.rowContainerRight}>
                <TouchableOpacity
                  onPress={() => {
                    if (!this.props.onDelete) {
                      return;
                    }

                    this.props.onDelete(item.item.id);
                  }}
                >
                  <Text style={styles.rowContainerText}>X</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    );
  }
}
export default TodoList;
