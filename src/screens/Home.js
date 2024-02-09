import { StyleSheet, Text, View,ScrollView, Image,StatusBar, Alert, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import Subjects from '../components/Subjects'
import Header from '../components/Header'


import { useNavigation } from '@react-navigation/native'

import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import LinearGradient from 'react-native-linear-gradient'

const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-7036694557736762/7656612630';

const Home = () => {
const navigation = useNavigation()

useEffect(()=>{
const unsubscribe = navigation.addListener('beforeRemove',e=>{
  e.preventDefault();
  BackHandler.exitApp();
})
return unsubscribe;
},[navigation])



  return (<>
{/* <View style={{width:"100%" , backgroundColor:'#402B3A',flex:1,flexDirection:'row' ,justifyContent:'space-around',flexWrap:'wrap',  }}>
   */}
     
{/* <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    />  */}


<Header leftIcon={require('../assets/images/menu.png')} title={"Home"} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.openDrawer()}/>

<LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={[ '#BBE2EC','#FFF6E9',]} style={styles.linearGradient}>

<View style={{flexDirection:'row',flex:1,flexWrap:'wrap'}}>

<Subjects title={"Computer"} image={require('../assets/images/desktop-computer.png')} onClick={()=>navigation.navigate('Computer')} bgColor={'#FFEBAD'} />
  
<Subjects title={"Physics"} image={require('../assets/images/formula.png')} onClick={()=>navigation.navigate('Physics')} bgColor={'#EFF396'}/>

<Subjects title={"Biology"} image={require('../assets/images/botany.png')} onClick={()=>navigation.navigate('Biology')} bgColor={'#FFE7E7'}/>
<Subjects title={"Chemistry"} image={require('../assets/images/h2o.png')} onClick={()=>navigation.navigate('Chemistry')}  bgColor={'lightgreen'}/>

</View>
</LinearGradient>


  </>
  )
}

export default Home

const styles = StyleSheet.create({
  linearGradient: {
    
    paddingHorizontal:12,paddingBottom:8,
    borderRadius: 5,
    justifyContent:'space-between'
    ,flexDirection:'row'
    ,flex:1
  },
})