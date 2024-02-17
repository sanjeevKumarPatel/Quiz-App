import { StatusBar, StyleSheet, Text, View,TouchableOpacity,Modal, Button } from 'react-native'
import React, { useEffect,useState } from 'react'
import * as Animatable from 'react-native-animatable';
import Header from '../components/Header';
import SplashScreen from 'react-native-splash-screen'
import { useNavigation } from '@react-navigation/native';
import Subjects from '../components/Subjects';


import firestore from '@react-native-firebase/firestore';
import { ScrollView, TextInput } from 'react-native-gesture-handler';





 const Introduction = ({}) => {

const navigation = useNavigation()

  useEffect(()=>{
setTimeout(()=>{

  SplashScreen.hide();
},2000)    
   
  },[])



 
 

  return (
    <View style={{flex:1}}>

<Header leftIcon={require('../assets/images/menu.png')} title={"Choose Mode"} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.openDrawer()}/>

<View style={{flexDirection:'row',flex:1,flexWrap:'wrap'}}>

<Subjects title={"Study Mode"} image={require('../assets/images/book.png')} onClick={()=>navigation.navigate('Home',{mode:'study'})} bgColor={'#FFE7E7'}/>

<Subjects title={"Quiz Mode"} image={require('../assets/images/quiz.png')} onClick={()=>navigation.navigate('Home',{mode:'quiz'})}  bgColor={'lightgreen'}/>

<Subjects title={"Admin Mode"} image={require('../assets/images/quiz.png')} onClick={()=>navigation.navigate('Home',{mode:'admin'})}  bgColor={'pink'}/>


</View>
    </View>
  )

 }
export default Introduction

const styles = StyleSheet.create({


})