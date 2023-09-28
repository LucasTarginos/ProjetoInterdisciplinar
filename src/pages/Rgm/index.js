import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Rgm() {
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsVisible(!isVisible);
  };

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
        <Text style={styles.title}>Para recuperar seu RGM, preencha abaixo:</Text>
        <View style={styles.imageContainer}>
        <Image source={require('../../assets/rgm.png')} style={styles.image} resizeMode="contain" />
      </View>
      </View>
      <View style={styles.containerForm}>
        <TextInput
          placeholder='Nascimento'
          style={styles.input}
        />
        <TextInput
          placeholder='Seu CPF'
          style={styles.input}
        />
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRgm}>
          <Text style={styles.rgmText}>Recuperar RGM</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Help}>
        <TouchableOpacity style={styles.buttonHelp} onPress={toggleTextVisibility}>
          <Text style={styles.helpText}>Ajuda</Text>
        </TouchableOpacity>
        {isVisible && (
          <Text style={styles.text}>
            Não recebeu o RGM ou continua com dúvidas?{'\n'}Procure a CAA de seu campus
          </Text>
        )}
      </View>
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
    marginTop: hp('4%'), // 4% da altura da tela para espaçamento
    marginBottom: hp('2%'), // 2% da altura da tela para espaçamento
  },

  title: {
    fontSize: wp('6%'), // 6% da largura da tela para o tamanho da fonte
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hp('2%'), // 2% da altura da tela para espaçamento
  },

  imageContainer: {
    marginHorizontal: hp('10%'),
    borderWidth: 2, // Adiciona uma borda
    borderStyle: 'dashed',
    borderColor: '#c0c0c0',
    width: wp('50%'), // Largura responsiva (ajuste conforme necessário)
    aspectRatio: 1, // Mantém a proporção para criar uma borda quadrada
    justifyContent: 'center', // Centraliza a imagem dentro da borda
    alignItems: 'center',
  },

  image: {
    width: wp('100%'),
    marginTop: hp('2%'), // 2% da altura da tela para espaçamento
  },

  containerForm: {
    width: wp('100%'),
    paddingHorizontal: wp('5%'), // 5% da largura da tela para espaçamento horizontal
  },

  input: {
    borderBottomWidth: 1,
    height: hp('5%'), // 5% da altura da tela para a altura do input
    marginBottom: hp('2%'), // 1% da altura da tela para espaçamento
    fontSize: wp('4%'), // 4% da largura da tela para o tamanho da fonte
    width: '100%',
  },

  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('2%'), // 2% da largura da tela para espaçamento
  },

  button: {
    backgroundColor: '#FF9E00',
    width: wp('30%'),
    borderRadius: 4,
    paddingVertical: hp('2%'), // 2% da altura da tela para o padding vertical
    marginTop: hp('2%'), // 2% da altura da tela para espaçamento
    alignItems: 'center',
    marginHorizontal: wp('2%'), // 2% da largura da tela para espaçamento horizontal
  },

  buttonText: {
    color: '#003B76',
    fontSize: wp('4%'), // 4% da largura da tela para o tamanho da fonte
    fontWeight: 'bold',
  },

  buttonRgm: {
    backgroundColor: '#003B76',
    width: wp('50%'),
    borderRadius: 4,
    paddingVertical: hp('2%'), // 2% da altura da tela para o padding vertical
    marginTop: hp('2%'), // 2% da altura da tela para espaçamento
    alignItems: 'center',
    marginHorizontal: wp('2%'), // 2% da largura da tela para espaçamento horizontal
  },

  rgmText: {
    color: '#fff',
    fontSize: wp('4%'), // 4% da largura da tela para o tamanho da fonte
    fontWeight: 'bold',
  },

  Help: {
    paddingHorizontal: wp('5%'), // 5% da largura da tela para espaçamento horizontal
  },

  buttonHelp: {
    marginTop: hp('2%'), // 2% da altura da tela para espaçamento
    alignSelf: 'center',
  },

  helpText: {
    color: '#08105E',
  },

  text: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: wp('3%'), // 3% da largura da tela para padding
    marginVertical: hp('2%'),
    color: '#7D7D7D',
    fontSize: wp('3%'), // 3% da largura da tela para o tamanho da fonte
    textAlign: 'center',
  },
});
