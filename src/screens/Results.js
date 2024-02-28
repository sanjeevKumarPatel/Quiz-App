import { Image, ScrollView, StatusBar, StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import Header from '../components/Header';

const Results = ({navigation,route}) => {

  const {answers,points}= (route.params);
  return (
    <View style={{flex:1,justifyContent:'center'}}>
   
   
   <Header leftIcon={require('../assets/images/home.png')} title={"Result"} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.navigate('Introduction')}/>


      <ScrollView style={{marginTop:6}}>

      {answers.map(({answer,question,index})=>(answer == true ? 
      <View key={Math.random()*10} style={{flexDirection:'row',padding:8,alignItems:'center',borderWidth: .6,marginHorizontal:45,marginVertical:2,justifyContent:'space-around',borderRadius:4}}>
      <Animatable.Text animation={'fadeInLeft'}  style={{fontSize:20,fontWeight:'700'}}>Que.{question} :- </Animatable.Text>
      <Animatable.Image animation={'fadeInRight'} source={require('../assets/images/check.png')} style={{height:30,width:30}}/>

      </View>
      :<View  key={Math.random()*100} style={{flexDirection:'row',padding:8,alignItems:'center',borderWidth: .6,marginHorizontal:45,marginVertical:2,justifyContent:'space-around',borderRadius:4}}>
      <Animatable.Text animation={'fadeInLeft'} style={{fontSize:20,fontWeight:'700',color:'black'}}>Que.{question} :-</Animatable.Text>
      <Animatable.Image animation={'fadeInRight'} source={require('../assets/images/no.png')} style={{height:30,width:30}}/>

      </View>))}
        </ScrollView>
        <View style={{borderWidth:1,padding:12,borderColor:'blue',borderRadius:6,backgroundColor:'lightgreen', margin:10}}> 

        <Animatable.Text animation={'fadeInUp'} style={{fontSize:26,fontWeight:'600',textAlign:'center',color:'red'  ,borderWidth:.4,marginHorizontal:12,borderRadius:2}}> You have socred : {points}</Animatable.Text>
<View style={{height:12}}></View>
        <Button title="Back to Home" onPress={()=>navigation.navigate('Introduction')}></Button>
        </View>

    </View>
  )
}

export default Results

const styles = StyleSheet.create({})