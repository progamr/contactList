
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  TouchableHighlight,
  Text,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'flex-start',
  },
  button:{
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
});
import TaskRow from './TaskRow';

export default class TaskList extends Component {

  constructor(props, context) {

    super(props, context);
    /*const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,

    });*/

    /*this.state = {
      dataSource: ds.cloneWithRows(props.rovers),
    };*/



  }

  renderRow(rover) {
    return (
      <View style={styles.container}>
        <TaskRow rover={rover}/>
      </View>
    )
  }

  render() {
    /*return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          key={this.props.rovers}
          />
          <TouchableHighlight
            onPress={this.props.onAddStarted}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Add One</Text>
          </TouchableHighlight>
      </View>
    );*/
    if(this.props.movies) {
      var res = this.props.movies.map((item, i) => {
        return (
          <Text key={i}>{item.first_name}</Text>
        );
      })
    }
    return (
      <View>
        {res}
      </View>
    );
  }

}

/*TaskList.propTypes = {
  onAddStarted: React.PropTypes.func.isRequired,
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};*/
/*TaskList.propTypes = {
  onAddStarted: React.PropTypes.func.isRequired,
  rovers: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};*/
