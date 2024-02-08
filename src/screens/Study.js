import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
const Study = () => {
  return (<>
  <StatusBar hidden={false} backgroundColor={'red'}/>
    <Header leftIcon={require('../assets/images/back.png')} title={"chapter"} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.goBack()}/>
  </>

  )
}

export default Study

const styles = StyleSheet.create({})