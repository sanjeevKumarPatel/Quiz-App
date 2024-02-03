import { StyleSheet, Text, View,ScrollView, Image,StatusBar } from 'react-native'
import React from 'react'
import Subjects from '../components/Subjects'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
const navigation = useNavigation()
  return (<>
<View style={{width:"100%" , backgroundColor:'#402B3A',flex:1,flexDirection:'row' ,justifyContent:'space-around',flexWrap:'wrap',marginTop:StatusBar.currentHeight  }}>
  
<Header leftIcon={require('../assets/images/menu.png')} title={"Home"} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.openDrawer()}/>

<View style={{height:20,width:'100%'}}></View>
<Subjects title={"Computer"} image={require('../assets/images/botany.png')} onClick={()=>navigation.navigate('Computer')}/>
  
<StatusBar translucent={true} backgroundColor={'#D63484'} hidden={false} />
</View>
  </>
  )
}

export default Home

const styles = StyleSheet.create({})