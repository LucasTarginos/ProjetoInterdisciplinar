import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function MenuAmigos() {  
    const navigation = useNavigation();

    return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="account-circle" size={wp('15%')} color="#FFFFFF" />
        <Text style={styles.userName}>Luiz</Text>
        <Text style={styles.userOccupation}>Análise e Desenvolvimento de Sistemas</Text>
      </View>

      <TouchableOpacity style={styles.menuItem}>
        <MaterialCommunityIcons name="account-multiple" size={wp('10%')} color="#fff" />
        <Text style={styles.menuItemText}>Novo Grupo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <MaterialCommunityIcons name="contacts" size={wp('10%')} color="#fff" />
        <Text style={styles.menuItemText}>Contatos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <MaterialCommunityIcons name="cog" size={wp('10%')} color="#fff" />
        <Text style={styles.menuItemText}>Configuração</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <MaterialCommunityIcons name="school" size={wp('10%')} color="#fff" />
        <Text style={styles.menuItemText}>Minha Turma</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={wp('10%')} color="#fff" />
        <Text style={styles.menuItemText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.footerImageContainer}>
        <Image source={require('../../assets/Unipe.png')} style={styles.footerImage} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272E72',
  },
  header: {
    backgroundColor: '#3641AA',
    paddingStart: wp('2%'),
    alignItems: 'center',
    paddingTop: wp('7%')
  },
  userName: {
    fontSize: wp('5%'),
    color: '#FFFFFF',
    marginTop: hp('1%'),
  },
  userOccupation: {
    fontSize: wp('3.5%'),
    color: '#FFFFFF',
    padding: wp('2%')
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('6%'),
  },
  menuItemText: {
    marginLeft: wp('4%'),
    fontSize: wp('4.5%'),
    color: '#fff',
  },
  footerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
    paddingTop: wp('25%')
  },

  footerImage: {
    width: wp('48%'),
    height: hp('9%'),
    marginBottom: hp('2%'),
  },
});

