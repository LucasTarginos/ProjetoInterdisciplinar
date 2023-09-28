import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Signin() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image
          source={require('../../assets/logo.png')} 
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <View style={styles.overlay}></View>
      </View>

      <View style={styles.containerInicio}>
        <Text style={styles.message}>Bem vindo de volta, calouro!</Text>
        {/* Usando uma View com borda quadrada responsiva */}
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/login.png')} style={styles.image} resizeMode="contain" />
        </View>
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

        <TouchableOpacity style={styles.Notrgm} onPress={() => navigation.navigate('Rgm')}>
          <Text style={styles.esqueci}> Esqueci o RGM </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Notsenha} onPress={() => navigation.navigate('Senha')}>
          <Text style={styles.esqueci}> Esqueceu ou deseja efetuar o reset da sua senha? </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Não tem conta? Registro </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  backgroundContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  backgroundImage: {
    width: '100%',
    height: hp('100%'),
    position: 'absolute',
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: hp('0%'),
  },

  containerInicio: {
    marginTop: hp('10%'),
    marginBottom: hp('5%'),
    alignItems: 'center',
  },

  message: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },

  
  imageContainer: {
    marginTop: hp('1%'),
    padding: hp('2%'),
    borderWidth: 2, // Adiciona uma borda
    borderStyle: 'dashed',
    borderColor: '#c0c0c0',
    width: wp('60%'), // Largura responsiva (ajuste conforme necessário)
    aspectRatio: 1, // Mantém a proporção para criar uma borda quadrada
    justifyContent: 'center', // Centraliza a imagem dentro da borda
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: '100%', // A imagem preencherá o espaço dentro da borda
  },

  containerForm: {
    width: wp('100%'),
    paddingHorizontal: wp('5%'),
  },

  title: {
    fontSize: wp('4%'),
    marginTop: hp('2%'),
  },

  input: {
    borderBottomWidth: 1,
    height: hp('6%'),
    marginBottom: hp('2%'),
    fontSize: wp('4%'),
    width: '100%',
  },

  Notrgm: {
    marginTop: hp('2%'),
    alignSelf: 'center',
  },

  Notsenha: {
    marginTop: hp('2%'),
    alignSelf: 'center',
  },

  esqueci: {
    color: '#a1a1a1',
    fontSize: wp('3%'),
  },

  button: {
    backgroundColor: '#003B76',
    width: wp('80%'),
    borderRadius: 4,
    paddingVertical: hp('2%'),
    marginTop: hp('2%'),
    alignItems: 'center',
    alignSelf: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },

  buttonRegister: {
    marginTop: hp('2%'),
    alignSelf: 'center',
  },

  registerText: {
    color: '#a1a1a1',
    fontSize: wp('3%'),
  },
});
