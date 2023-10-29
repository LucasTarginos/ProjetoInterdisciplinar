import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking  } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';

export default function Dashboard() {
  const navigation = useNavigation();
    
   const openStudentArea = () => {
    Linking.openURL('https://novoportal.cruzeirodosul.edu.br/');
  };

  const openBlackboard = () => {
    Linking.openURL('https://novoportal.cruzeirodosul.edu.br/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image
          source={require('../../assets/logo_dashboard.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <View style={styles.overlay}></View>
      </View>

      <View style={styles.headerContainer}>
        <Image source={require('../../assets/icon.png')} style={styles.headerImage} resizeMode="contain" />
        <View style={styles.headerTextContainer}>
          <Text style={styles.message}>Olá,{'\n'}estudante!</Text>
        </View>
      </View>

      <Text style={styles.descriptionBelowImage}>Como o Campus poderia te ajudar hoje?</Text>

      <View style={styles.cards}>
      <TouchableOpacity style={styles.card} onPress={openStudentArea}>
          <Image source={require('../../assets/area_aluno.png')} style={styles.cardIcon} />
          <Text style={styles.textCard}>Área do aluno</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={openBlackboard}>
          <Image source={require('../../assets/blackboard.png')} style={styles.cardIcon} />
          <Text style={styles.textCard}>Blackboard</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Mapa')} >
          <Image source={require('../../assets/mapa.png')} style={styles.cardIcon} />
          <Text style={styles.textCard}>Mapa</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.card}>
          <Image source={require('../../assets/curso.png')} style={styles.cardIcon} />
          <Text style={styles.textCard}>Meu curso</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('Amigos')}>
          <Image source={require('../../assets/amigos.png')} style={styles.cardIcon} />
          <Text style={styles.textCard}>Amigos</Text>
    </TouchableOpacity>
      </View>

      <View style={styles.footerImageContainer}>
        <Image source={require('../../assets/Unipe.png')} style={styles.footerImage} />
      </View>
      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#08105E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  backgroundImage: {
    width: '100%',
    height: hp('50%'),
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

  headerContainer: {
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerImage: {
    width: wp('30%'),
    height: hp('15%'),
  },

  headerTextContainer: {
    marginLeft: wp('2%'),
  },

  message: {
    fontSize: wp('8%'),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  descriptionBelowImage: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
  },

  cards: {
    marginTop: hp('1%'),
    
    paddingHorizontal: wp('2%'),
    width: wp('95%'),
  },

  card: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    height: hp('11%'),
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    marginBottom: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
  },

  cardIcon: {
    width: wp('11%'),
    height: hp('5%'),
    marginRight: wp('8%'),
  },

  textCard: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    color: '#000',
    textAlign: 'center',
  },

  footerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },

  footerImage: {
    width: wp('48%'),
    height: hp('9%'),
    marginBottom: hp('2%'),
  },
});
