import React from "react";
import { TextInput, View, Button } from "react-native";
import { styles } from "./styles";
import { connect } from "react-redux";
import { addNewItem } from "../../actions";

class AddNew extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
    };
  }
  render() {
    return (
      <View style={styles.addNewContainer}>
        <View style={styles.addNewContainerLeft}>
          <TextInput
            style={styles.addNewContainerTextInput}
            onChangeText={(text) => {
              this.setState({ text });
            }}
          />
        </View>
        <View style={styles.addNewContainerRight}>
          <Button
            title={"Dodaj"}
            onPress={
              this.props.addNewItem(this.state.text)}
          />
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addNewItem: (text) => dispatch(addNewItem(text)),
});
export default connect(null, mapDispatchToProps)(AddNew);
 