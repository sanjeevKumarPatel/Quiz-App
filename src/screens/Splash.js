import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect,componentWillMount } from 'react'
import * as Animatable from 'react-native-animatable';
 const Splash = ({navigation}) => {

useEffect(()=>{
  setTimeout(() => {
    navigation.navigate('Drawer')
}, 1000);
},[])

    



  

  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:"lightgreen",padding:40}}>
    <Animatable.Text
    style={{color:'red',fontSize:22,fontWeight:'300',textAlign:'center'}}
    animation="slideInUp" direction="alternate" iterationCount="infinite">Be the master of Computer , Physics, Chemistry & Biology</Animatable.Text>
<Animatable.Text 
style={{color:'white',fontSize:92,fontWeight:'700',textAlign:'center'}}
animation="pulse" easing="ease-out" iterationCount="infinite">❤️</Animatable.Text>
    

   
      <StatusBar hidden={true}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})