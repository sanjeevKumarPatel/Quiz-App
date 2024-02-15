import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect,componentWillMount } from 'react'
import * as Animatable from 'react-native-animatable';
import Header from '../components/Header';
import SplashScreen from 'react-native-splash-screen'
import { useNavigation } from '@react-navigation/native';
import Subjects from '../components/Subjects';


 const Introduction = ({}) => {

const navigation = useNavigation()

  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide();
    },1000)
  },[])

  return (
    <View style={{flex:1}}>
<Header leftIcon={require('../assets/images/menu.png')} title={"Choose Mode"} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.openDrawer()}/>










<View style={{flexDirection:'row',flex:1,flexWrap:'wrap'}}>


{/* 
<Subjects title={"Computer"} image={require('../assets/images/desktop-computer.png')} bgColor={'#FFEBAD'} 
onClick={()=>navigation.navigate('SubjectChapter', {
  subject:"Computer",
chapters:["Generel Introduction","Input and Output Devices","Memory",
" Personal Computer ","Disigning Tools and Programming Languages ","Data Representation and Number System","Software","Data Communication","Internet","Microsoft Windows","Microsoft Office"],

sets: [["comp010101"],
["comp010201", "comp010202","comp010203","comp010204"],
["comp010301","comp010302","comp010303"],["comp010401"],
["comp010501"],["comp010601"],["comp010701","comp010702","comp010703","comp010704"],["comp010801","comp010802"],["comp010901","comp010902","comp010903","comp010904",],["comp011001","comp011002","comp011003"],
["comp011101","comp011102","comp011103","comp011104","comp011105"]

]
}
)} />
  



<Subjects title={"Physics"} image={require('../assets/images/formula.png')} onClick={()=>navigation.navigate('SubjectChapter',

  {
    subject:"Physics",
chapters:["Mechanics","Heat","Wave Motion and Sound"],
sets: [["comp010101",2,3,4],
[1,2,3,4,5,6],
[1,2]]
}
)} bgColor={'#EFF396'}/> */}

<Subjects title={"Study Mode"} image={require('../assets/images/book.png')} onClick={()=>navigation.navigate('Home',{mode:'study'})} bgColor={'#FFE7E7'}/>

<Subjects title={"Quiz Mode"} image={require('../assets/images/quiz.png')} onClick={()=>navigation.navigate('Home',{mode:'quiz'})}  bgColor={'lightgreen'}/>

<Subjects title={"Admin Mode"} image={require('../assets/images/quiz.png')} onClick={()=>navigation.navigate('Home',{mode:'admin'})}  bgColor={'pink'}/>


  
</View>



    </View>
  )
}

export default Introduction

const styles = StyleSheet.create({})