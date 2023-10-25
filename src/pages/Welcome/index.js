import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/logo_inicial.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerImage}>
        <Image
          source={require('../../assets/inicial.png')}
          style={styles.mainImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Conheça sua universidade com o CAMPUS SOCIAL</Text>
        <Text style={styles.text}> Descubra lugares, pessoas, cursos, {'\n'}eventos e tudo mais que engloba a  {'\n'}sua universidade!</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Vamos começar!</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('25%'), // 35% da altura da tela
  },

  logoImage: {
    width: wp('80%'), // 80% da largura da tela
  },

  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('25%'), // 35% da altura da tela
  },

  mainImage: {
    width: wp('80%'), // 80% da largura da tela
  },

  containerForm: {
    marginStart: wp('5%'), // 5% da largura da tela para o espaçamento lateral
    paddingStart: wp('5%'), // 5% da largura da tela para o espaçamento interno lateral
    paddingEnd: wp('5%'), // 5% da largura da tela para o espaçamento interno lateral
  },

  title: {
    fontSize: wp('6%'), // 6% da largura da tela para o tamanho da fonte
    fontWeight: 'bold',
    marginTop: hp('2%'), // 2% da altura da tela para o espaçamento superior
    marginBottom: hp('1%'), // 1% da altura da tela para o espaçamento inferior
    textAlign: 'justify',
  },

  text: {
    fontSize: wp('4.5%'), // 4.5% da largura da tela para o tamanho da fonte
    marginTop: hp('2%'), // 1% da altura da tela para o espaçamento superior
    textAlign: 'center',
  },

  button: {
    position: 'absolute',
    backgroundColor: '#003B76',
    borderRadius: 10,
    paddingVertical: hp('2%'), // 2% da altura da tela para o padding vertical
    width: wp('80%'), // 80% da largura da tela
    height: hp('10%'), // 10% da altura da tela
    alignSelf: 'center',
    bottom: hp('-15%'), // -5% da altura da tela para posicionar abaixo
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: wp('4%'), // 4% da largura da tela para o tamanho da fonte
    fontWeight: 'bold',
    color: '#fff',
  },
});
