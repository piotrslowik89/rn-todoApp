import React from "react";
import { TextInput, FlatList, StyleSheet, Text, View, Button } from "react-native";
import {styles} from './styles'

class AddNew extends React.Component {
  render() {
    return (
      <View
        style={styles.addNewContainer}
      >
        <View style={styles.addNewContainerLeft}>
          <TextInput style={styles.addNewContainerTextInput} />
        </View>
        <View style={styles.addNewContainerRight}>
          <Button title={"Dodaj"} onPress={() => {}} />
        </View>
      </View>
    );
  }
}
export default AddNew;
