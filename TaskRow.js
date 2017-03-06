import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
  }
});

export default class TaskRow extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.todo.name}</Text>
      </View>
    );
  }
}

/*TaskRow.PropTypes = {
  todo: React.PropTypes.shape({
    fname: React.PropTypes.string.isRequired,
    lname: React.PropTypes.string.isRequired,
    img: React.PropTypes.string.isRequired,
  }).isRequired,
};*/
TaskRow.PropTypes = {
  rover: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
  }).isRequired,
};
