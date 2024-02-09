import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import Chapters from '../../components/Chapters'
import { useNavigation } from '@react-navigation/native'

const PhyChpters = () => {
    const navigation= useNavigation();
  return (
    
<>

<ScrollView >


<View style={{height:6}}></View>
    {/* <Text style={{color:"white",backgroundColor:'#280274',fontSize:22,padding:16,textAlign:'center',fontWeight:'900',marginVertical:4,borderRadius:4}}> Computer</Text> */}
  
  {/* ================================================== */}
   <Chapters title={"1. Mechanics"} click={()=>navigation.navigate('Level',{subject:"Computer",chapter:"1. Generel Introduction",sets:["comp010101"]})}/>

   <Chapters title={"2. Heat"} click={()=>navigation.navigate('Level',{subject:"Computer",chapter:"2. Input and Output Devices",sets:["comp010201", "comp010202","comp010203","comp010204"]})}/>

   <Chapters title={"3. Wave Motion and Sound"} click={()=>navigation.navigate('Level',{subject:"Computer",chapter:"3. Memory",sets:["comp010301","comp010302","comp010303",]})}/>


    <View style={{height:50,}}></View>
   
</ScrollView>

</>
  )
}

export default PhyChpters

const styles = StyleSheet.create({})