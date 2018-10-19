
import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, TouchableHighlight} from 'react-native';


export default class Inputs extends Component{
  state={
    inputArea: '',
    places: [],
  }
  handlePlaceNameChanged =(userInput)=>{
    this.setState({
      inputArea:userInput
    })
  }
  placeSubmitHandler = ()=>{
      if(this.state.inputArea.length == 0){
        return;
      }else{
        this.setState(prevState =>{
          return {
            places: prevState.places.concat(prevState.inputArea)
          }
        })
      }
  }
  render() {
    const placesOutput = this.state.places.map((place,i)=>(
          <Text key={i}>{place}</Text> 
      ))
    return (  
      <View>  
        <View style ={styles.inputContainer}> 
          <TextInput 
            style ={styles.input}
            placeholder='input your favor place here'
            value={this.state.inputArea}
            onChangeText={this.handlePlaceNameChanged}
          />
          <TouchableHighlight style ={styles.placeButton} onPress = { this.placeSubmitHandler}>
            <Text> Add </Text> 
          </TouchableHighlight>
        </View>
        <View style ={styles.placesOutput}>{placesOutput}</View>
     </View> 
    );
  }
}

const styles = StyleSheet.create({
  inputContainer:{
    // flex: 1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'pink',
    alignItems: 'center',
   

  },
  input:{
    width: "70%",
    borderColor: 'gray',
    borderBottomWidth: 1,
    padding: 20,
    backgroundColor: 'lightblue',
  },
  placeButton:{
    width: "30%",
    alignItems: 'center'
  },
  placesOutput:{
    width: "100%",
    // flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',



  }
});