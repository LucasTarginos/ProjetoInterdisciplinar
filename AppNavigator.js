import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from './src/components/DrawerContent'; 
import Amigos from './src/pages/Amigos'; 

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Amigos" component={AmigosStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const AmigosStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Amigos" component={Amigos} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
