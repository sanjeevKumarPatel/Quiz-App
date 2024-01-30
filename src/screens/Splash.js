import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

 const Splash = ({navigation}) => {
// useEffect(
// ()=>{

//     setTimeout(() => {
//         navigation.navigate('Home')
//     }, 1000);
// },[]

// )

useEffect(
  ()=>{
  
      setTimeout(() => {
          navigation.navigate('Playground')
      }, 1000);
  },[]
  
  )
  

  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:"hotpink",padding:40}}>
      <Text style={{color:'white',fontSize:40,fontWeight:'700',textAlign:'center'}}>Be the master of Computer , Physics, Chemistry & Biology</Text>
      <StatusBar hidden={true}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})