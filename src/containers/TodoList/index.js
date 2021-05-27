

import React from "react";
import { TextInput, FlatList, StyleSheet, Text, View, Button } from "react-native";
import {styles} from './styles'

class TodoList extends React.Component {
  render() {
    return (
      <FlatList data={this.props.list}
        renderItem={(position) => {
          return (
            <View key={position.item.id}
            style={styles.rowContainer}>
             
             <View style={styles.rowContainerLeft}>
               <Text style={styles.rowContainerText}>{position.item.text}</Text>
               </View>
               <View style={styles.rowContainerRight}>
                 <Text style={styles.rowContainerText}>X</Text>
                 </View>
            </View>
          );
        }}
      />
    );
  }
}
export default TodoList;
