import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import PhyChapters from './ChemistryChpters'
import { useNavigation } from '@react-navigation/native'
const ChemstryQuiz = () => {
    const navigation = useNavigation();

  return (<>

    <Header leftIcon={require('../../assets/images/back.png')} title={"Physics"} RightIcon={require('../../assets/images/dots.png')} onClickLeftIcon={()=>navigation.goBack()}/>
    <PhyChapters/>
  </>
  )
}

export default ChemstryQuiz

const styles = StyleSheet.create({})