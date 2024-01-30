import { StyleSheet, Text, View,StatusBar} from 'react-native'
import React from 'react'
import Chapters from '../components/Chapters'
import { useRoute } from '@react-navigation/native'
const Level = ({navigation}) => {
    const route = useRoute();
    const {sets,subject} = route.params
;

  return (
    <View style={{paddingTop:StatusBar.currentHeight,margin:5}}>
    <View>

<Text style={{fontSize:34,textAlign:'center',fontWeight:'800',backgroundColor:'lightgreen',padding:4,margin:1,borderRadius:4}}>{subject}</Text>
</View>
      {sets.map((set,index)=>{
          return(
              <Chapters title={set} key={index}  click={()=>navigation.navigate('Playground')}/>
              )
            })}
            </View>
  )
}

export default Level

const styles = StyleSheet.create({})