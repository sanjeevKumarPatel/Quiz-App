import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Subjects = ({title,image,onClick}) => {
  return (

    <Pressable
    onPress={onClick}
    style={{width:'40%',height:"25%", paddingHorizontal:12,alignItems:'center',margin:10,borderRadius:5,elevation:4, padding:8,backgroundColor:'white'}}>
    <View style={{borderWidth:2,borderRadius:78,padding:8,justifyContent:'center',alignItems:'center'}}>
      
    <Image source={image} style={{height:100,width:100,}} />
      </View> 
<Text style={{fontSize:18,fontWeight:'700',textAlign:'center',paddingTop:8}}>{title}</Text>
    </Pressable>
 
  )
}

export default Subjects

const styles = StyleSheet.create({})