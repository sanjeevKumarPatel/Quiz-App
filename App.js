import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Splash from './src/screens/Introduction';
import Results from './src/screens/Results';
import Playground from './src/screens/Playground';
import Study from './src/screens/Study';
import Level from './src/screens/Level';
import Drawer from './src/screens/Drawer';
const Stack = createNativeStackNavigator();

import SubjectChapter from './src/screens/SubjectChapter';
import Introduction from './src/screens/Introduction';
import Admin from './src/screens/Admin';


const App = () => {
  

  return (
    <>
  
    
      <NavigationContainer>
    <Stack.Navigator>
    
    
    <Stack.Screen name="Drawer" component={Drawer} options={{headerShown:false}}/>
    <Stack.Screen name="SubjectChapter" component={SubjectChapter} options={{headerShown:false}}/>
    
    
    <Stack.Screen name="Level" component={Level} options={{headerShown:false}}/>
    <Stack.Screen name="Study" component={Study} options={{headerShown:false}}/>
    <Stack.Screen name="Playground" component={Playground} options={{headerShown:false}}/>
    <Stack.Screen name="Admin" component={Admin} options={{headerShown:false}}/>
    
    <Stack.Screen name="Results" component={Results} options={{headerShown:false}}/>
    
    
    
    </Stack.Navigator>
    </NavigationContainer>
{/* } */}
    </>
    )
}

export default App

const styles = StyleSheet.create({})