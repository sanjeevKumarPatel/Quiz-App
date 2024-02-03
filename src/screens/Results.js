import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import Header from '../components/Header';

const Results = ({navigation,route}) => {

  const {answers,points}= (route.params);
  return (
    <View style={{flex:1,justifyContent:'center'}}>
   
   
   <Header leftIcon={require('../assets/images/home.png')} title={"Result"} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.navigate('Home')}/>


      <ScrollView style={{marginTop:20}}>

      {answers.map(({answer,question,index})=>(answer == true ? 
      <View key={Math.random()*10} style={{flexDirection:'row',padding:8,alignItems:'center',borderWidth: .6,marginHorizontal:45,marginVertical:2,justifyContent:'space-around',borderRadius:4}}>
      <Animatable.Text animation={'fadeInLeft'}  style={{fontSize:20,fontWeight:'700'}}>Que.{question} :- </Animatable.Text>
      <Animatable.Image animation={'fadeInRight'} source={require('../assets/images/check.png')} style={{height:30,width:30}}/>

      </View>
      :<View  key={Math.random()*100} style={{flexDirection:'row',padding:8,alignItems:'center',borderWidth: .6,marginHorizontal:45,marginVertical:2,justifyContent:'space-around',borderRadius:4}}>
      <Animatable.Text animation={'fadeInLeft'} style={{fontSize:20,fontWeight:'700'}}>Que.{question} :-</Animatable.Text>
      <Animatable.Image animation={'fadeInRight'} source={require('../assets/images/no.png')} style={{height:30,width:30}}/>

      </View>))}
        </ScrollView>
        <View style={{borderWidth:10,padding:23,borderColor:'blue',borderRadius:6,marginBottom:20,backgroundColor:'lightgreen', margin:10}}> 
        <Animatable.Text animation={'pulse'} iterationCount={'infinite'} style={{fontSize:26,fontWeight:'800',textAlign:'center',color:'red'}}> You have socred: {points}</Animatable.Text>
        </View>
<StatusBar hidden></StatusBar>
    </View>
  )
}

export default Results

const styles = StyleSheet.create({})