import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Amigos from './src/pages/Amigos'; // Seu componente Amigos
import DrawerContent from './src/components/DrawerContent'; // O componente do conteúdo do drawer

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Amigos" component={Amigos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
