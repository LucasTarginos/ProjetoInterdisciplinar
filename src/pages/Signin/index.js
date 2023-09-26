import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

export default function Signin() {
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerInicio}>
      <Text style={styles.message}>Bem vindo de volta, calouro!</Text>
      <Image source={require('../../assets/login.png')} style={{width:'100%', marginTop:50}}resizeMode="contain"/>
      
      </View>

      <View style={styles.containerForm}>
      <Text style={styles.title}>RGM:</Text>
      <TextInput 
      placeholder='Seu RGM ou CPF'
      style={styles.input}
      />
    <Text style={styles.title}>Senha:</Text>
      <TextInput 
      placeholder='Senha'
      style={styles.input}
      />

    <TouchableOpacity style={styles.Notrgm}>
      <Text style={styles.esqueci}> Esqueci o RGM </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Notsenha}>
      <Text style={styles.esqueci}> Esqueceu ou deseja efetuar o reset da sua senha? </Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register') } >
        <Text style={styles.registerText}>Não tem conta? Registro </Text>
    </TouchableOpacity>
    </View>

   </View>
  );
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#fff',
},

containerInicio:{
  marginTop:'30%',
  marginBottom:'8%'
},

message:{
  fontSize:24,
  fontWeight:'bold',
  textAlign:'center'
},

containerForm:{
  paddingStart:'5%',
  paddingEnd:'5%',

},

title:{
  fontSize:20,
  marginTop:18,

},

input:{
  borderBottomWidth:1,
  height:40,
  marginBottom:12,
  fontSize:16,
},

Notrgm:{
  marginTop:14,
  alignSelf: 'center',
},

Notsenha:{
  marginTop:14,
  alignSelf: 'center',
},


esqueci:{
  color: '#a1a1a1'
},

button:{
  backgroundColor:'#003B76',
  width:'100%',
  borderRadius: 4,
  paddingVertical:8, 
  marginTop:14,
  justifyContent:'center',
  alignItems:'center',
},

buttonText:{
  color:'#fff',
  fontSize:18,
  fontWeight:'bold'
},

buttonRegister:{
  marginTop:14,
  alignSelf: 'center',
},

registerText:{
  color: '#a1a1a1'
},
})