import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import PhyChapters from './BioChpters'
import { useNavigation } from '@react-navigation/native'
const BioQuiz = () => {
    const navigation = useNavigation();

  return (<>

    <Header leftIcon={require('../../assets/images/back.png')} title={"Biology"} RightIcon={require('../../assets/images/dots.png')} onClickLeftIcon={()=>navigation.goBack()}/>
    <PhyChapters/>
  </>
  )
}

export default BioQuiz

const styles = StyleSheet.create({})