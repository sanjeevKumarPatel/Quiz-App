import { Pressable, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);

const Chapters = ({title,click}) => {
  return (
    <AnimatableTouchableOpacity  animation={'pulse'} iterationCount={'infinite'}
    onPress={()=>click()}
    style={{padding:8,backgroundColor:'#0D4C92',borderColor:"blue",marginHorizontal:20,marginVertical:2,borderRadius:24,elevation:3}}>

    <Text style={{color:'#F2F7A1',fontSize:22,fontWeight:'900',padding:14,textAlign:"center",}}>{title}</Text>
      </AnimatableTouchableOpacity>
  )
}

export default Chapters

const styles = StyleSheet.create({})