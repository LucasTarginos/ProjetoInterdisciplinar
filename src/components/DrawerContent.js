/*
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function DrawerContent ({ navigation }) {
  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="account-circle" size={wp('15%')} color="#FFFFFF" />
        <Text style={styles.userName}>Luiz</Text>
        <Text style={styles.userOccupation}>Analise e Desenvolvimento de Sistemas</Text>
      </View>

      <TouchableOpacity style={styles.drawerItem}>
        <MaterialCommunityIcons name="group-add" size={wp('7%')} color="#333" />
        <Text style={styles.drawerItemText}>Novo Grupo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <MaterialCommunityIcons name="contacts" size={wp('7%')} color="#333" />
        <Text style={styles.drawerItemText}>Contatos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <MaterialCommunityIcons name="settings" size={wp('7%')} color="#333" />
        <Text style={styles.drawerItemText}>Configuração</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <MaterialCommunityIcons name="school" size={wp('7%')} color="#333" />
        <Text style={styles.drawerItemText}>Minha Turma</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={wp('7%')} color="#333" />
        <Text style={styles.drawerItemText}>Voltar</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#272E72',
    padding: wp('5%'),
    alignItems: 'center',
  },
  userName: {
    fontSize: wp('4%'),
    color: '#FFFFFF',
    marginTop: hp('1%'),
  },
  userOccupation: {
    fontSize: wp('3%'),
    color: '#FFFFFF',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('3%'),
  },
  drawerItemText: {
    marginLeft: wp('4%'),
    fontSize: wp('3.5%'),
  },
});

export default DrawerContent;

*/