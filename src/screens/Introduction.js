import { StatusBar, BackHandler,StyleSheet, Text, View,TouchableOpacity,Modal, Button, Alert } from 'react-native'
import React, { useEffect,useState } from 'react'
import * as Animatable from 'react-native-animatable';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import Subjects from '../components/Subjects';

import firestore from '@react-native-firebase/firestore';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


 const Introduction = ({}) => {

const navigation = useNavigation()

// useEffect(() => {
//   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
//   return () => backHandler.remove()
// }, [])

const handlePressBack= ()=>{
  Alert.alert('Exit App', 'Are you sure you want to exit',[
    {
      text:'Cancel'
      ,onPress:()=>null,
      style:'cancel'
    },{
    text:"Exit"
    ,onPress:()=>BackHandler.exitApp()}
  ])
}

 useEffect(()=>{
const unsubcribe = navigation.addListener('beforeRemove',(e)=>{
e.preventDefault();
handlePressBack()

})
return unsubcribe
 },[navigation])
 
  return (
    <View style={{flex:1}}>

<Header leftIcon={require('../assets/images/menu.png')} title={"Choose Mode"} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.openDrawer()}/>

<View style={{flexDirection:'row',flex:1,flexWrap:'wrap',justifyContent:'center'}}>

<Subjects title={"Study Mode"} image={require('../assets/images/book.png')} onClick={()=>navigation.navigate('Home',{mode:'study'})} bgColor={'#FFE7E7'}/>

<Subjects title={"Quiz Mode"} image={require('../assets/images/quiz.png')} onClick={()=>navigation.navigate('Home',{mode:'quiz'})}  bgColor={'#FF8E8F'}/>

{/* <Subjects title={"Admin Mode"} image={require('../assets/images/quiz.png')} onClick={()=>navigation.navigate('Home',{mode:'admin'})}  bgColor={'pink'}/> */}


</View>
    </View>
  )

 }
export default Introduction
const styles = StyleSheet.create({

})