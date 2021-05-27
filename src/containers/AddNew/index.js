import React from "react";
import { TextInput, FlatList, StyleSheet, Text, View, Button } from "react-native";

class AddNew extends React.Component {
  render() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "80%" }}>
          <TextInput style={{ fontSize: 20 }} />
        </View>
        <View style={{ width: "20%" }}>
          <Button title={"Dodaj"} onPress={() => {}} />
        </View>
      </View>
    );
  }
}
export default AddNew;
