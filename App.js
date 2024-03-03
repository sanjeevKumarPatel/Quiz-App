import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Introduction from './src/screens/Introduction';
import Results from './src/screens/Results';
import Playground from './src/screens/Playground';
import Study from './src/screens/Study';
import Level from './src/screens/Level';
import Drawer from './src/screens/Drawer';

import Splash from './src/screens/Splash';
const Stack = createNativeStackNavigator();

import SubjectChapter from './src/screens/SubjectChapter';
import Admin from './src/screens/Admin';
import SplashScreen from 'react-native-splash-screen'


const App = () => {
  
  useEffect(()=>{
    setTimeout(()=>{
    
      SplashScreen.hide();
    },1500)    
       
      },[])
    
    
  return (
    <>
  
    
      <NavigationContainer>
    <Stack.Navigator>
    
    
    {/* <Stack.Screen name="Drawer" component={Drawer} options={{headerShown:false}}/> */}
    {/* <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/> */}

    <Stack.Screen name="Introduction" component={Introduction} options={{headerShown:false}}/>
    
    <Stack.Screen name="SubjectChapter" component={SubjectChapter} options={{headerShown:false}}/>

    
    <Stack.Screen  name="Home" component={Home} options={{headerShown:false}}/>
    <Stack.Screen name="Level" component={Level} options={{headerShown:false}}/>
    <Stack.Screen name="Study" component={Study} options={{headerShown:false}}/>
    <Stack.Screen name="Playground" component={Playground} options={{headerShown:false}}/>
    <Stack.Screen name="Admin" component={Admin} options={{headerShown:false}}/>
    
    <Stack.Screen name="Results" component={Results} options={{headerShown:false}}/>
    
    </Stack.Navigator>
    </NavigationContainer>

    </>
    )
}

export default App

const styles = StyleSheet.create({})