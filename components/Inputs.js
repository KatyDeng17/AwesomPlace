
import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default class Inputs extends Component{
  state={
    inputArea: ''
  }
  handlePlaceNameChanged =(userInput)=>{
    this.setState({
      inputArea:userInput
    })
  }
  render() {
    return (     
        <TextInput 
           style ={styles.input}
           placeholder='input your favor place here'
           value={this.state.inputArea}
           onChangeText={this.handlePlaceNameChanged}
        />
    );
  }
}

const styles = StyleSheet.create({
  input:{
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});