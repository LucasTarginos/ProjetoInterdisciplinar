import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function Register() {
  const navigation= useNavigation();
  return (
    <View style={styles.container}>

    <View style={styles.containerInicio}>
    <Text style={styles.intro}>BEM VINDO AO {'\n'}CAMPUS SOCIAL!</Text>
    <Text style={styles.info}>Antes de conhecer sua universidade,{'\n'} nos forneça algumas informações necessárias.</Text>
    <Text style={styles.message}>Não se preocupe, seus dados estarão protegidos ;) </Text>
    </View>

    <View style={styles.containerForm}>
    <Text></Text>
      <TextInput 
      placeholder='Seu RGM'
      style={styles.input}
      />
    <Text></Text>
      <TextInput 
      placeholder='Seu CPF'
      style={styles.input}
      />
      <Text></Text>
      <TextInput 
      placeholder='Senha'
      style={styles.input}
      />
    <Text></Text>
      <TextInput 
      placeholder='Confirme a senha'
      style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonRegister}>Registro</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Signin') } >
        <Text style={styles.login}>Já tem uma conta? Entrar</Text>
    </TouchableOpacity>

    </View>
    );
}
const styles= StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#fff'
},

containerInicio:{
  marginTop:'30%',
  marginBottom:'8%',  
},

intro:{
  fontSize:24,
  fontWeight:'bold',
  textAlign:'center',
  marginBottom:20
},

info:{
  fontSize:18,
  textAlign:'center',
  marginBottom:20
},

message:{
  fontSize:16,
  textAlign:'center'
},

containerForm:{
  paddingStart:'5%',
  paddingEnd:'5%',
},

input:{
  borderBottomWidth:1,
  height:40,
  marginBottom:12,
  fontSize:16,
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

buttonRegister:{
  color:'#fff',
  fontSize:18,
  fontWeight:'bold'
},

buttonLogin:{
  marginTop:14,
  alignSelf: 'center'
},

login:{
  color: '#a1a1a1'
},

})