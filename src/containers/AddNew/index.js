import React from "react";
import {
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import { styles } from "./styles";

class AddNew extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <View style={styles.addNewContainer}>
        <View style={styles.addNewContainerLeft}>
          <TextInput
            style={styles.addNewContainerTextInput}
            onChangeText={(text) => {
              this.setState({text});
            }}
          />
        </View>
        <View style={styles.addNewContainerRight}>
          <Button
            title={"Dodaj"}
            onPress={() => {
              this.props.onPress
                ? () => {
                    this.props.onPress(this.state.text);
                  }
                : () => {};
            }}
          />
        </View>
      </View>
    );
  }
}
export default AddNew;
