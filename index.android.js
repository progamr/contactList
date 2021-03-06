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
import UserList from './UserList';
import CreateUser from './CreateUser';
import todosData from './users.json';
import api from './utilities/api';
export default class todo2 extends Component {
  /*
    constructor(props, context) {
      super(props, context);

      this.state = {
        usersD: todosData
      };

    }
*/
    // fetch method
    constructor(props, context) {
      super(props, context);

      this.state = {
        usersD: null
      };

    }


    componentDidMount() {
      fetch('http://192.168.0.127/levelUpworkspace/laravel/react/public/users')
      .then((res) => res.json())
      .then((resJ) => {
        this.setState({
          usersD: resJ.users
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
        id: 'userform',
      });
    }

    renderScene(route, nav) {
      switch(route.id) {
        case 'userform':
          return (<Text>add form comes here</Text>);
        case 'userlist':
          return (
            <View style={styles.container}>
              <UserList
                onAddStarted={this.onAddStarted.bind(this)}
                users={this.state.usersD}/>
                <CreateUser />

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
    /*
    render() {
      return (
        <View style={styles.container}>
          <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            movies={this.state.moviesD}/>
        </View>
      );
    }*/

    render() {
      return (
        <Navigator
          initialRoute={{id: 'userlist'}}
          configureScene={this.configureScene}
          ref={((nav) => {
            this.nav = nav;
          })}
          renderScene={this.renderScene.bind(this)}
        />
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
