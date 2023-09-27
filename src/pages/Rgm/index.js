import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, StyleSheet,Image,TextInput, TouchableOpacity} from 'react-native';

export default function Register() {
  const navigation= useNavigation();

  const [isVisible, setIsVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <View style={styles.container}>
    <View style={styles.containerInicio}>
    <Text style={styles.title}>Para recuperar seu RGM, preencha abaixo:</Text>
    <Image source={require('../../assets/rgm.png')} style={{width:'100%', marginTop:20}}resizeMode="contain"/>   
    </View>
    <View style={styles.containerForm}>
    <Text></Text>
      <TextInput 
      placeholder='Nascimento'
      style={styles.input}
      />
    <Text></Text>
      <TextInput 
      placeholder='Seu CPF'
      style={styles.input}
      />
</View>

    <View style={styles.containerButton}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signin') } >
        <Text style={styles.buttonText}>Voltar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonRgm}> 
        <Text style={styles.rgmText}>Recuperar rgm </Text>
    </TouchableOpacity>
    </View>
    <View style={styles.Help}>
        
    <TouchableOpacity style={styles.buttonHelp} onPress={toggleTextVisibility}>
        <Text style={styles.helpText}>Ajuda</Text>
    </TouchableOpacity>
    {isVisible && <Text style={styles.text}>Não recebeu o RGM ou continua com dúvidas ?{'\n'}Procure a CAA de seu campus</Text>}
    </View>

    </View>
  );}

  const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },

    containerInicio:{
        marginTop:'30%',
        marginBottom:'2%',  
    },

    title:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20
    },

    containerForm:{
        paddingStart:'5%',
        paddingEnd:'5%',
    },

    containerButton:{
        flexDirection: 'row',
        justifyContent: 'center', // Alinhar os botões horizontalmente
        alignItems: 'center', // Alinhar os botões verticalmente (opcional)
        padding: 10, // Espaçamento interno para o container
    },

    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16,
    },

    button:{
        backgroundColor:'#FF9E00',
        width:'30%',
        borderRadius: 4,
        paddingVertical:8, 
        marginTop:14,
        alignItems:'center'
    },

    buttonText:{
        color:'#003B76',
        fontSize:18,
        fontWeight:'bold'
    },

    buttonRgm:{
        backgroundColor:'#003B76',
        width:'50%',
        borderRadius: 4,
        paddingVertical:8, 
        marginTop:14,
        alignItems:'center',
        marginHorizontal: 5
    },

    rgmText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    },

    Help:{
        paddingStart:'5%',
        paddingEnd:'5%',
    },
    buttonHelp:{
        marginTop: 14,
        alignSelf: 'center',
        
    },

    helpText:{
        color:'#08105E'
    },
    
    text:{
        backgroundColor: '#7D7D7D',
        borderRadius: 10,
        padding: 10,
        marginBottom:10,
        color:"#D9D9D9",
        fontSize:14,
        textAlign:'center',

    },
  })

