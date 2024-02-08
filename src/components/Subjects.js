import { Pressable, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);

const Subjects = ({title,image,onClick}) => {
  return (

    <AnimatableTouchableOpacity  animation={'pulse'} iterationCount={'infinite'} 
    onPress={onClick}
    style={{width:'40%',height:170, paddingHorizontal:12,alignItems:'center',margin:"5%",borderRadius:5,elevation:4, padding:8,backgroundColor:'#FFEBAD'}}>
    <View style={{borderWidth:2,borderRadius:78,padding:8,justifyContent:'center',alignItems:'center'}}>
      
    <Image source={image} style={{height:100,width:100,}} />
      </View> 
<Text style={{fontSize:18,fontWeight:'500',textAlign:'center',paddingTop:8}}>{title}</Text>
    </AnimatableTouchableOpacity>
 
  )
}

export default Subjects

const styles = StyleSheet.create({})