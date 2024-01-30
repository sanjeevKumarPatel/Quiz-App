import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Chapters = ({title,click}) => {
  return (
    <Pressable 
    onPress={()=>click()}
    style={{borderBottomWidth:4,padding:8,backgroundColor:'lightblue',borderBottomColor:"blue"}}>

    <Text style={{color:'black',fontSize:22,fontWeight:'900',padding:22,textAlign:"center",}}>{title}</Text>
      </Pressable>
  )
}

export default Chapters

const styles = StyleSheet.create({})