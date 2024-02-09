import { Pressable, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);

const Chapters = ({title,click}) => {
  return (
    <AnimatableTouchableOpacity  animation={'pulse'} iterationCount={5}
    onPress={()=>click()}
    style={{padding:8,backgroundColor:'#ffff',marginHorizontal:20,marginVertical:4,borderRadius:4,elevation:5}}>

    <Text style={{color:'darkblue',fontSize:16,fontWeight:'600',padding:8,textAlign:"center",}}>{title}</Text>
      </AnimatableTouchableOpacity>
  )
}

export default Chapters

const styles = StyleSheet.create({})