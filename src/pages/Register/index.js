import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Register() {
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
        <Text style={styles.intro}>BEM VINDO AO {'\n'}CAMPUS SOCIAL!</Text>
        <Text style={styles.info}>Antes de conhecer sua universidade,{'\n'} nos forneça algumas informações necessárias.</Text>
        <Text style={styles.message}>Não se preocupe, seus dados estarão protegidos ; </Text>
      </View>

      <View style={styles.containerForm}>
        <TextInput
          placeholder='Seu RGM'
          style={styles.input}
        />
        <TextInput
          placeholder='Seu CPF'
          style={styles.input}
        />
        <TextInput
          placeholder='Senha'
          style={styles.input}
        />
        <TextInput
          placeholder='Confirme a senha'
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonRegister}>Registro</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.login}>Já tem uma conta? Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundContainer: {
    width: '100%',
    height: '100%', // Alterado para 100% da altura da tela
    position: 'absolute', // Posição absoluta para sobrepor outros elementos
  },

  backgroundImage: {
    width: '100%',
    height: hp('100%'), // Ajuste a altura conforme necessário
    position: 'absolute', // Posição absoluta para sobrepor outros elementos
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Cor de fundo 
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: hp('0%'), // Ajuste a altura conforme necessário
  },


  containerInicio: {
    marginBottom: hp('8%'), // Usando 8% da altura da tela para espaçamento
  },

  intro: {
    fontSize: hp('3%'), // Usando 3% da altura da tela para o tamanho da fonte
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hp('2%'), // Usando 2% da altura da tela para espaçamento
  },

  info: {
    fontSize: hp('2.5%'), // Usando 2.5% da altura da tela para o tamanho da fonte
    textAlign: 'center',
    marginBottom: hp('2%'), // Usando 2% da altura da tela para espaçamento
  },

  message: {
    fontSize: hp('2%'), // Usando 2% da altura da tela para o tamanho da fonte
    textAlign: 'center',
  },

  containerForm: {
    width: '100%',
    paddingHorizontal: wp('5%'), // 5% da largura da tela para espaçamento horizontal

  },

  input: {
    borderBottomWidth: 1,
    height: hp('4%'), // Usando 4% da altura da tela para a altura do input
    marginBottom: hp('3%'), // Usando 3% da altura da tela para espaçamento
    fontSize: hp('2%'), // Usando 2% da altura da tela para o tamanho da fonte
    width: '100%',
  },

  button: {
    backgroundColor: '#003B76',
    width: '100%',
    borderRadius: 4,
    paddingVertical: hp('2%'), // Usando 2% da altura da tela para o padding vertical
    marginTop: hp('2%'), // Usando 2% da altura da tela para espaçamento
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonRegister: {
    color: '#fff',
    fontSize: hp('2.5%'), // Usando 2.5% da altura da tela para o tamanho da fonte
    fontWeight: 'bold'
  },

  buttonLogin: {
    marginTop: hp('2%'), // Usando 2% da altura da tela para espaçamento
    alignSelf: 'center'
  },

  login: {
    color: '#a1a1a1'
  },
});
