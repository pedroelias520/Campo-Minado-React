import React, { Component } from 'react';
import {StyleSheet,View,Text,} from 'react-native';
import params from './src/params'
import Field from './src/Components/Field'

export default class App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.inscrition}>Iniciando o Mines: {params.getColumnsAmount()}x{params.getColumnsAmount()} </Text>
        <Field/>
      </View>
    );
  }
}
//Erro no <Field/> 
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF'
  },
  welcome:{
    fontSize:20,
    textAlign:'center',
    margin:10
  },
  inscrition:{
    fontSize:10,
    textAlign:'center'
  }
});
