import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
import Computer from '../subjects/Computer';
import Home from './Home';
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Drawer.Screen name="Computer" component={Computer} options={{headerShown:false}}/>


      </Drawer.Navigator>
  )
}

export default DrawerScreen

const styles = StyleSheet.create({})