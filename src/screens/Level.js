import { StyleSheet, Text, View,StatusBar,ScrollView} from 'react-native'
import React from 'react'
import Chapters from '../components/Chapters'
import { useRoute } from '@react-navigation/native'

import Header from '../components/Header'
import Playground from './Playground'

const Level = ({navigation}) => {
    const route = useRoute();
    const {subject,chapter,sets,mode} = route.params
;
const modeSelector = ()=>{
  if(mode === "study"){
    return "Study"
  }

  else if(mode === "quiz"){
    return "Playground"
  }

  // else return "Admin"
  else if(mode === "admin"){
    return "Admin"
  }

}


  return (

    <View style={{flex:1}}>
   <Header leftIcon={require('../assets/images/back.png')} title={chapter} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.goBack()}/>

    <View  style={{height:6}}></View>
<ScrollView>

      {sets.map((set,index)=>{
        return(
          <Chapters title={`Level ${index+1} `  + "_"+  mode+"_mode"  } key={index}  click={()=>navigation.navigate(modeSelector(),{set:set,subject:subject,chapter:chapter,level:index+1,totalLevel:sets.length})}/>
          )
          
        })}
        </ScrollView>
  
            </View>
  )
}

export default Level

const styles = StyleSheet.create({})