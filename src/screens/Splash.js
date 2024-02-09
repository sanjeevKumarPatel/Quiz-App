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
    <View style={{alignItems:'center',flex:1,marginTop:80}}>
 <Animatable.Image source={require("../assets/images/banner.png")} style={{width:200,height:200}}>

 </Animatable.Image>
   
      <StatusBar hidden={true}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})