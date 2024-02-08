import { ScrollView, StatusBar, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Chapters from '../../components/Chapters'
import Header from '../../components/Header'
import ComputerChapters from './ComputerChapters'
const Computer = ({navigation}) => {


  return (
    <>
    <Header leftIcon={require('../../assets/images/back.png')} title={"Computer"} RightIcon={require('../../assets/images/dots.png')} onClickLeftIcon={()=>navigation.goBack()}/>

    <View style={{}}>




<ComputerChapters/>

    </View>
    </>
  )
}

export default Computer

const styles = StyleSheet.create({})