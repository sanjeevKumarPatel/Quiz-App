import { Pressable, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);

const Subjects = ({title,image,onClick,bgColor,textColor='black'}) => {
  return (

    <AnimatableTouchableOpacity  animation={'pulse'} iterationCount={5} 
    onPress={onClick}
    style={{width:'40%',height:'30%', paddingHorizontal:'5%',alignItems:'center',margin:"5%",borderRadius:15,elevation:4, paddingTop:'4%',backgroundColor:bgColor}}>
    <View style={{borderWidth:.5,borderRadius:18,padding:8,justifyContent:'center',alignItems:'center',borderColor:'gray'}}>
      
    <Image source={image} style={{height:100,width:100,}} />
      </View> 
<Text style={{fontSize:18,fontWeight:'500',textAlign:'center',paddingTop:'10%',color:textColor}}>{title}</Text>
    </AnimatableTouchableOpacity>
  )
}

export default Subjects

const styles = StyleSheet.create({  linearGradient: {
    
  paddingHorizontal:12,paddingBottom:8,
  borderRadius: 5,
  justifyContent:'space-between',alignItems:'flex-end'
  ,flexDirection:'row'
},})

