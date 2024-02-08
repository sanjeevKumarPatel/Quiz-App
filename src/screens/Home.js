import { StyleSheet, Text, View,ScrollView, Image,StatusBar, Alert, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import Subjects from '../components/Subjects'
import Header from '../components/Header'


import { useNavigation } from '@react-navigation/native'

import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

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

<View style={{flexDirection:'row',flex:1,flexWrap:'wrap'}}>

<Subjects title={"Computer"} image={require('../assets/images/botany.png')} onClick={()=>navigation.navigate('Computer')}/>
  
<Subjects title={"Computer"} image={require('../assets/images/botany.png')} onClick={()=>navigation.navigate('Computer')}/>
<Subjects title={"Computer"} image={require('../assets/images/botany.png')} onClick={()=>navigation.navigate('Computer')}/>
<Subjects title={"Computer"} image={require('../assets/images/botany.png')} onClick={()=>navigation.navigate('Computer')}/>

</View>


{/* </View> */}
  </>
  )
}

export default Home

const styles = StyleSheet.create({})