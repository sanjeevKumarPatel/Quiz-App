import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import Home from './Home';
import Introduction from './Introduction';


const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Introduction" component={Introduction} options={{headerShown:false}}/>

    
      </Drawer.Navigator>
  )
}

export default DrawerScreen

const styles = StyleSheet.create({})