import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
import Computer from '../subjects/computer/ComputerQuiz';
import Physics from '../subjects/physics/PhyQuiz';
import Home from './Home';
import ChemstryQuiz from '../subjects/chemistry/ChemistryQuiz';
import BioQuiz from '../subjects/biology/BioQuiz';
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Drawer.Screen name="Computer" component={Computer} options={{headerShown:false}}/>
        <Drawer.Screen name="Physics" component={Physics} options={{headerShown:false}}/>

        <Drawer.Screen name="Chemistry" component={ChemstryQuiz} options={{headerShown:false}}/>
        <Drawer.Screen name="Biology" component={BioQuiz} options={{headerShown:false}}/>

        



      </Drawer.Navigator>
  )
}

export default DrawerScreen

const styles = StyleSheet.create({})