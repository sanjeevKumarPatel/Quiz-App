import { Image, StyleSheet, Text, View ,BackHandler} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {

    const navigation = useNavigation();
   
    useEffect(()=>{
setTimeout(()=>navigation.navigate('Introduction'),2000)
    },[])
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
    <Image source={require('../assets/images/banner.png')} style={{height:200,width:200,borderRadius:18}}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})