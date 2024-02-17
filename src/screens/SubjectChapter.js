import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import Chapters from '../components/Chapters'


const SubjectChapter = ({route}) => {
const navigation = useNavigation()
const  {subject,chapters,sets,mode} = route.params;

  return (
    <View>
   <Header leftIcon={require('../assets/images/back.png')} title={subject  + "_"+  mode +"_mode"} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.goBack()}/>
<View style={{height:6}}></View>
<FlatList
data={chapters}
renderItem={({item,index})=>(<Chapters title={item} click={()=>navigation.navigate('Level',{subject:subject,chapter:item,mode:mode,sets:sets[index]})}/>
)}
/>

    </View>
  )
}

export default SubjectChapter

const styles = StyleSheet.create({})