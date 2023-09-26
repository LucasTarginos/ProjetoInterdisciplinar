import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Welcome() {
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
      
     <View style={styles.containerLogo}>
    <Image
    source={require('../../assets/logo_inicial.png')}
    style={{width:'100%', marginTop:50}}
    resizeMode="contain"
    />
     </View>

     <View style={styles.containerImage}>
    <Image
    source={require('../../assets/inicial.png')}
    style={{width:'100%', marginTop:50}}
    resizeMode="contain"
    />
     </View>

     <View style={styles.containerForm}>

    <Text style={styles.title}>Conheça sua universidade com o CAMPUS SOCIAL</Text>
    <Text style={styles.text}> Descubra lugares, pessoas, cursos, {'\n'}eventos e tudo mais que engloba a  {'\n'}sua universidade!</Text>

    <TouchableOpacity style={styles.button}
    onPress={() => navigation.navigate('Register') }    
    >
      <Text style={styles.buttonText}>Vamos começar!</Text>
    </TouchableOpacity>

     </View>


    </View>

  );
}

const styles= StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff'


},
containerLogo:{
justifyContent:'center',
alignItems:'center'
},

containerImage:{
  justifyContent:'center',
  alignItems:'center'
},

containerForm:{
marginStart:'5%',
paddingStart:'5%',
paddingEnd: '5%'
},

title:{
  fontSize:24,
  fontWeight:'bold',
  marginTop:28,
  marginBottom:3,
  textAlign: 'justify',
},

text:{
  fontSize:18,
  marginTop:12,
  textAlign: 'center'
},

button:{
  position:'absolute',
  backgroundColor:'#003B76',
  borderRadius:10,
  paddingVertical:8,
  width:'100%',
  height:'45%',
  alignSelf:'center',
  bottom:'-75%',
  alignItems:'center',
  justifyContent:'center',
  },

buttonText:{
fontSize:18,
fontWeight:'bold',
color:'#fff'
}
})