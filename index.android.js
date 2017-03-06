/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';

import React, { Component } from 'react';
import Request from 'superagent';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';
import TaskList from './TaskList';
import todosData from './users.json';
import api from './utilities/api';
export default class todo2 extends Component {

    /*constructor(props, context) {
      super(props, context);

      this.state = {
        todos: todosData
      };

    }*/
    constructor(props, context) {
      super(props, context);

      this.state = {
        moviesD: null
      };

    }
/*
res.header('Access-Control-Allow-Origin', 'example.com');
 res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
*/
    componentDidMount() {
      fetch('http://192.168.0.125/workspace/start/start.php')
      .then((res) => res.json())
      .then((resJ) => {
        this.setState({
          moviesD: resJ.users
        })
      })
    }

    /*componentWillMount() {
      api.getRovers().then((res) => {
        this.setState({
          rovers: res.rovers
        });
      });
    }*/

    onAddStarted() {
      this.nav.push({
        name: 'taskform',
      });
    }

    renderScene(route, nav) {
      switch(route.name) {
        case 'taskform':
          return (<Text>add form comes here</Text>);
        default:
          return (
            <View style={styles.container}>
              <TaskList
                onAddStarted={this.onAddStarted.bind(this)}
                movies={this.state.moviesD}/>
            </View>
          );
      }
    }

    configureScene() {
      return Navigator.SceneConfigs.FloatFromBotton;
    }

    /*render() {
      return (
        <Navigator
          configureScene={this.configureScene}
          initialRoute={{name: 'tasklist', index: 0}}
          ref={((nav) => {
            this.nav = nav;
          })}
          renderScene={this.renderScene.bind(this)}
        />
      );
    }*/
    render() {
      return (
        <View style={styles.container}>
          <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            movies={this.state.moviesD}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('todo2', () => todo2);
