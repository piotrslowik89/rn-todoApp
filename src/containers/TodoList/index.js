import React from "react";
import { styles } from "./styles";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { deleteItem } from "../../actions";

class TodoList extends React.Component {
  render() {
    return (
      <FlatList
        data={this.props.list}
        renderItem={(item) => {
          return (
            <View key={item.item.id} style={styles.rowContainer}>
              <View style={styles.rowContainerLeft}>
                <Text style={styles.rowContainerText}>{item.item.text}</Text>
              </View>
              <View style={styles.rowContainerRight}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.deleteItem(item.item.id);
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
const mapStateToProps = (state) => ({
  list: state.todoList,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
