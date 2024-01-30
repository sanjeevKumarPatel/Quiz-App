import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Chapters from '../components/Chapters'
const Computer = ({navigation}) => {
  return (
    <ScrollView style={{paddingTop:StatusBar.currentHeight,margin:5}}>
        <Text style={{color:"white",backgroundColor:'blue',fontSize:22,padding:8,textAlign:'center',fontWeight:'900',marginBottom:4,borderRadius:4}}>Subject: Computer</Text>
       <Chapters title={"1. Microsoft Office "} click={()=>navigation.navigate('Level',{subject:"Computer",sets:["set1","set2","set3"]})}/>
       <Chapters title={"2. Personal Computer"} />
       <Chapters title={"3. Personal Computer"} />
      
       
        
       
    </ScrollView>
  )
}

export default Computer

const styles = StyleSheet.create({})