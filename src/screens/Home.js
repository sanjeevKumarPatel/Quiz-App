import { StyleSheet, Text, View,ScrollView, Image,StatusBar } from 'react-native'
import React from 'react'
import Subjects from '../components/Subjects'

const Home = ({navigation}) => {
  return (<>

<StatusBar translucent={true} backgroundColor={'red'} hidden={false} />
<View style={{width:"100%" ,backgroundColor:'lightgreen',flex:1,flexDirection:'row' ,justifyContent:'space-around',flexWrap:'wrap', paddingTop:StatusBar.currentHeight}}>

<Subjects title={"Computer"} image={require('../assets/images/botany.png')} onClick={()=>navigation.navigate('Computer')}/>


<Subjects title={"Physics"} image={require('../assets/images/botany.png')} onClick={()=>console.log("button is  biology")}/>


  
</View>
  </>
  )
}

export default Home

const styles = StyleSheet.create({})