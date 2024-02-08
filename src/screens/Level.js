import { StyleSheet, Text, View,StatusBar} from 'react-native'
import React from 'react'
import Chapters from '../components/Chapters'
import { useRoute } from '@react-navigation/native'

import Header from '../components/Header'

const Level = ({navigation}) => {
    const route = useRoute();
    const {sets,subject,chapter} = route.params
;

  return (

    <View style={{}}>
   <Header leftIcon={require('../assets/images/back.png')} title={chapter} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.goBack()}/>

    <View  style={{height:6}}>
      
{/* <View style={{backgroundColor:'#280274'}}>

<Text style={{fontSize:34,textAlign:'center',fontWeight:'800',color:'white',padding:4,margin:1,borderRadius:4}}>{subject}</Text>
</View>

<Text style={{fontSize:34,textAlign:'center',fontWeight:'800',color:'#280274',padding:4,margin:1,borderRadius:4}}>{chapter}</Text> */}
</View>
      {sets.map((set,index)=>{
          return(
              <Chapters title={`Level ${index+1}` } key={index}  click={()=>navigation.navigate('Playground',{set:set,subject:subject,chapter:chapter,level:index+1,totalLevel:sets.length})}/>
              )
            })}
            </View>
  )
}

export default Level

const styles = StyleSheet.create({})