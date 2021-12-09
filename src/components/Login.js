import React, {Component} from 'react';

import {Text, View, Button, StyleSheet, TextInput} from 'react-native';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      pass: '',
      address: '',
    };
  }
  checkaddr(text) {
    let rjx = /^[a-zA-Z]+$/;
    this.setState({address: text});
    if (!rjx.test(text)) {
      this.setState({address: 'Please Provide Valid Address'});
    } else {
      this.setState({address: ''});
    }
  }
  onPress = () => {
    this.setState({str: this.state.name});
  };
  render() {
    return (
      <View>
        <TextInput
          maxLength={5}
          placeholder={'Enter Name'}
          style={[styles.textbox]}
          onChangeText={text => this.setState({name: text})}></TextInput>
        <TextInput
          keyboardType={'numeric'}
          placeholder={'Enter Password'}
          secureTextEntry={true}
          style={[styles.textbox]}
          onChangeText={text => this.setState({pass: text})}></TextInput>
        <TextInput
          placeholder={'Enter Address'}
          style={[styles.textbox]}
          onChangeText={text => this.checkaddr(text)}></TextInput>
        <Text style={{color: 'red'}}>{this.state.address}</Text>
        <Button title="Submit" onPress={this.onPress} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  textbox: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
  },
});
export default Login;
