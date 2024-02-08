import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Splash from './src/screens/Splash';
import Results from './src/screens/Results';
import Playground from './src/screens/Playground';
import Study from './src/screens/Study';
import Computer from './src/subjects/computer/ComputerQuiz';
import Level from './src/screens/Level';
import Drawer from './src/screens/Drawer';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="Drawer" component={Drawer} options={{headerShown:false}}/>

     
      <Stack.Screen name="Level" component={Level} options={{headerShown:false}}/>
      <Stack.Screen name="Study" component={Study} options={{headerShown:false}}/>
      <Stack.Screen name="Playground" component={Playground} options={{headerShown:false}}/>
      <Stack.Screen name="Results" component={Results} options={{headerShown:false}}/>



    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})