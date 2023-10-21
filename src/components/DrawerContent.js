import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet 
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="account-circle" size={50} color="#FFFFFF" />
        <Text style={styles.userName}>Seu Nome</Text>
        <Text style={styles.userOccupation}>Analise e Desenvolvimento de Sistemas</Text>
      </View>
      <TouchableOpacity style={styles.drawerItem}>
        <MaterialCommunityIcons name="star" size={24} color="#333" />
        <Text style={styles.drawerItemText}>Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <MaterialCommunityIcons name="heart" size={24} color="#333" />
        <Text style={styles.drawerItemText}>Item 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <MaterialCommunityIcons name="bookmark" size={24} color="#333" />
        <Text style={styles.drawerItemText}>Item 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <MaterialCommunityIcons name="bell" size={24} color="#333" />
        <Text style={styles.drawerItemText}>Item 4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <MaterialCommunityIcons name="settings" size={24} color="#333" />
        <Text style={styles.drawerItemText}>Item 5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
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
    padding: 20,
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 10,
  },
  userOccupation: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  drawerItemText: {
    marginLeft: 20,
    fontSize: 16,
  },
});

export default DrawerContent;
