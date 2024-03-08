import { Pressable, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);

const Subjects = ({title,image,onClick,bgColor,textColor='black'}) => {
  return (

    <AnimatableTouchableOpacity  animation={'pulse'} iterationCount={2} 
    onPress={onClick}
    style={{width:moderateScale(140),height:moderateVerticalScale(170), paddingHorizontal:moderateScale(20),alignItems:'center',margin:moderateScale(15),borderRadius:15,elevation:4, paddingTop:moderateScale(12),backgroundColor:bgColor}}>
    <View style={{borderWidth:.5,borderRadius:18,padding:8,justifyContent:'center',alignItems:'center',borderColor:'gray'}}>
      
    <Image source={image} style={{height:100,width:100,}} />
      </View> 
<Text style={{fontSize:18,fontWeight:'500',textAlign:'center',paddingTop:'10%',color:textColor}}>{title}</Text>
    </AnimatableTouchableOpacity>
  )
}

export default Subjects

const styles = StyleSheet.create({  linearGradient: {    
  paddingHorizontal:4,paddingBottom:2,
  borderRadius: 5,
  justifyContent:'space-between',alignItems:'flex-end'
  ,flexDirection:'row'
},})

