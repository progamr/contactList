import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';


const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    width: 90,
    height: 40,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center'
  },

});

export default class CreateUser extends Component {

constructor (){
  super();

  this.state ={
    first_name: "",
    last_name: "",
    image: "",
    errors: [],
  }

}

async onRegisterPressed(){
  try {
    let response = await fetch('http://192.168.0.127/levelUpworkspace/laravel/react/public/users',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // user: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          image: this.state.image,
        // }
      })
    });
    let responseJson = await response.json();
    console.log("res is: "+ responseJson);
    return responseJson.movies;
  } catch(error) {
    console.error(error);
  }
}

render(){
  return(
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text>
        {this.state.first_name}
        Enter Fist Name

      </Text>
      <TextInput
        onChangeText={(val)=>this.setState({first_name: val})}
        style={styles.input} returnKeyType="next" />

      <Text>
        {this.state.last_name}
        Enter Last Name
      </Text>
      <TextInput onChangeText={(val)=>this.setState({last_name: val})} style={styles.input} returnKeyType="go"/>

      <Text>
        {this.state.image}
        Select Your Image
      </Text>
      <TextInput onChangeText={(val)=>this.setState({image: val})} style={styles.input} returnKeyType="go"/>

          <TouchableOpacity style={styles.buttonContainer} onPress={this.onRegisterPressed.bind(this)}>
            <Text style={styles.buttonText}>
              Create New User
            </Text>
          </TouchableOpacity>

    </KeyboardAvoidingView>
  );

}
}
