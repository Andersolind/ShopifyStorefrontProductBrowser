import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import SideMenu from '../components/SideMenu';
import StackNavigation from './StackNavigation';

const DrawerStack = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <DrawerStack.Navigator drawerContent ={()=>
        <SideMenu/>}>
            <DrawerStack.Screen
            name="StackScreens"
            component={StackNavigation}
            options={{headerShown:false}}
            />
        </DrawerStack.Navigator>
 
  );
};

export default DrawerNavigation