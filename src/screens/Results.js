import { Image, ScrollView, StatusBar, StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import Header from '../components/Header';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const Results = ({navigation,route}) => {

  const {answers,points}= (route.params);
  return (
    <View style={{flex:1,}}>
   
   
   <Header leftIcon={require('../assets/images/home.png')} title={"Result"} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.navigate('Introduction')}/>


      <ScrollView style={{marginTop:moderateVerticalScale(8)}}>

      {answers.map(({answer,question,index})=>(answer == true ? 
      <View key={Math.random()*10} style={{flexDirection:'row',padding:8,alignItems:'center',borderWidth: .6,marginHorizontal:moderateScale(45),marginVertical:moderateVerticalScale(3),justifyContent:'space-around',borderRadius:4}}>
      <Animatable.Text animation={'fadeInLeft'}  style={{fontSize:moderateScale(20),fontWeight:'600',color:'black'}}>Que.{question} :- </Animatable.Text>
      <Animatable.Image animation={'fadeInRight'} source={require('../assets/images/check.png')} style={{height:moderateVerticalScale(30),width:moderateScale(30)}}/>

      </View>
      :<View  key={Math.random()*100} style={{flexDirection:'row',padding:8,alignItems:'center',borderWidth: .6,marginHorizontal:45,marginVertical:2,justifyContent:'space-around',borderRadius:moderateScale(4)}}>
      <Animatable.Text animation={'fadeInLeft'} style={{fontSize:20,fontWeight:'700',color:'black'}}>Que.{question} :-</Animatable.Text>
      <Animatable.Image animation={'fadeInRight'} source={require('../assets/images/no.png')} style={{height:30,width:30}}/>

      </View>))}
        </ScrollView>
        <View style={{borderRadius:6,backgroundColor:'#aeead3', width:'100%',justifyContent:"space-around",alignItems:"center",flexDirection:"row",marginBottom:moderateVerticalScale(0),paddingVertical:moderateScale(20)}}> 

        <Animatable.Text animation={'fadeInUp'} style={{fontSize:moderateScale(22),fontWeight:'600',textAlign:'center',color:'#000' ,borderRadius:2}}> Marks : {points}</Animatable.Text>
<View style={{height:12}}></View>
        <Button title="Back to Home" onPress={()=>navigation.navigate('Introduction')}></Button>
        </View>

    </View>
  )
}

export default Results

const styles = StyleSheet.create({})