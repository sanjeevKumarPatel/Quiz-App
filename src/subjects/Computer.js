import { ScrollView, StatusBar, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Chapters from '../components/Chapters'
import Header from '../components/Header'
const Computer = ({navigation}) => {


  return (

    <View style={{marginTop:StatusBar.currentHeight,flex:1,backgroundColor:'#AC87C5'}}>



   <Header leftIcon={require('../assets/images/back.png')} title={"Computer"} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.goBack()}/>



    <ScrollView >
<View style={{height:10}}></View>
        {/* <Text style={{color:"white",backgroundColor:'#280274',fontSize:22,padding:16,textAlign:'center',fontWeight:'900',marginVertical:4,borderRadius:4}}> Computer</Text> */}
      
      {/* ================================================== */}
       <Chapters title={"1. Generel Introduction "} click={()=>navigation.navigate('Level',{subject:"Computer",chapter:"1. Generel Introduction",sets:["comp010101"]})}/>


       
       <Chapters title={"2. Input and Output Devices"} click={()=>navigation.navigate('Level',{subject:"Computer",chapter:"2. Input and Output Devices",sets:["comp010201", "comp010202","comp010203","comp010204"]})}/>

       <Chapters title={"3. Memory"} click={()=>navigation.navigate('Level',{subject:"Computer",chapter:"3. Memory",sets:["comp010301","comp010302","comp010303",]})}/>

       <Chapters title={"4. Personal Computer "} click={()=>navigation.navigate('Level',{subject:"Computer",chapter:"4. Personal Computer",sets:["comp010401"]})}/>

       <Chapters title={"5. Disigning Tools and Programming Languages "} click={()=>navigation.navigate('Level',{subject:"Computer",chapter:"5. Disigning Tools and Programming Languages",sets:["comp010501"]})}/>

       <Chapters title={"6. Data Representation and Number System "} click={()=>navigation.navigate('Level',{subject:"Computer",chapter:"6. Data Representation and Number System ",sets:["comp010601"]})}/>

       <Chapters title={"7. Software"} click={()=>navigation.navigate('Level',{subject:"Computer",chapter:"7. Software",sets:["comp010701","comp010702","comp010703","comp010704"]})}/>

       <Chapters title={"8. Data Communication"} click={()=>navigation.navigate('Level',{subject:"Computer",chapter:"8. Data Communication",sets:["comp010801","comp010802"]})}/>
       <Chapters title={"9. Internet "} click={()=>navigation.navigate('Level',{subject:"Computer",chapter:"9. Internet",sets:["comp010901","comp010902","comp010903","comp010904",]})}/>
     
       <Chapters title={"10. Microsoft Windows "} click={()=>navigation.navigate('Level',{subject:"Computer",chapter:"10.  Microsoft Windows",sets:["comp011001","comp011002","comp011003"]})}/>
       <Chapters title={"11. Microsoft Office "} click={()=>navigation.navigate('Level',{subject:"Computer",chapter:"11. Microsoft Office",sets:["comp011101","comp011102","comp011103","comp011104","comp011105"]})}/>





        <View style={{height:50,}}></View>
       
    </ScrollView>
    </View>
  )
}

export default Computer

const styles = StyleSheet.create({})