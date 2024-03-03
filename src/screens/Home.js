import { StyleSheet, Text, View,ScrollView, Image,StatusBar, Alert, BackHandler, Modal ,Dimensions, TouchableOpacity} from 'react-native'
import React, { useEffect,useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import Subjects from '../components/Subjects'
import Header from '../components/Header'
import DeviceInfo from 'react-native-device-info';


import { useNavigation, useRoute } from '@react-navigation/native'

import { BannerAd, BannerAdSize, MobileAds, TestIds } from 'react-native-google-mobile-ads';
import LinearGradient from 'react-native-linear-gradient'

const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-7036694557736762/7656612630';

const Home = () => {
  const {width,height} = Dimensions.get('window')
const navigation = useNavigation()
const route = useRoute();
const {mode} = route.params
const [modalVisibleUpdate,setModalVisibleUpdate] = useState(false)

const appVersion = DeviceInfo.getVersion();
const [updatedVersion,setUpdatedVersion] = useState("")
const [message,setMessage] = useState("")

  const sendVersion= async()=>{
const user = await firestore().collection('version').doc('db1267ojhWaejCH6VOGp').get();
const message = user.data()?.message;
 let currentVersion = user.data()?.version;
setUpdatedVersion(currentVersion)
setMessage(message)

  }



  useEffect(()=>{

    sendVersion();
    
  
  },[])



// useEffect(()=>{
// const unsubscribe = navigation.addListener('beforeRemove',e=>{
//   e.preventDefault();
//   BackHandler.exitApp();
// })
// return unsubscribe;
// },[navigation])



  return (<>
{/* <View style={{width:"100%" , backgroundColor:'#402B3A',flex:1,flexDirection:'row' ,justifyContent:'space-around',flexWrap:'wrap',  }}>
   */}
     
{/* <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    />  */}


<Header leftIcon={require('../assets/images/back.png')} title={"Home" + "_"+  mode+"_mode"} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.goBack()}/>



<LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={[ '#FFF6E9','#BBE2EC','#FFF6E9','#BBE2EC','#FFF6E9',]} style={styles.linearGradient}>
<View style={{flexDirection:'row',flex:1,flexWrap:'wrap'}}>



<Subjects title={"Computer"} image={require('../assets/images/desktop-computer.png')} bgColor={'#FFEBAD'} 
onClick={()=>navigation.navigate('SubjectChapter', 
{
  subject:"Computer",
chapters:["Generel Introduction","Input and Output Devices","Memory",
" Personal Computer ","Disigning Tools and Programming Languages ","Data Representation and Number System","Software","Data Communication","Internet","Microsoft Windows","Microsoft Office"],
mode:mode,
sets: [["comp010101"],["comp010201", "comp010202","comp010203","comp010204"],
["comp010301","comp010302","comp010303"],["comp010401"],
["comp010501"],["comp010601"],["comp010701","comp010702","comp010703","comp010704"],["comp010801","comp010802"],["comp010901","comp010902","comp010903","comp010904",],["comp011001","comp011002","comp011003"],["comp011101","comp011102","comp011103","comp011104","comp011105"]]
}
)} />
  



<Subjects title={"Physics"} image={require('../assets/images/formula.png')} onClick={()=>navigation.navigate('SubjectChapter',

  {mode:mode,
    subject:"Physics",
chapters:["Mechanics","Heat","Wave Motion and Sound"],
sets: [["phy0101","phy0102","phy0103","phy0104","phy0105","phy0106","phy0107","phy0108","phy0109","phy0110","phy0111","phy0112"],
["phy0201","phy0202","phy0203","phy0204","phy0205","phy0206","phy0207","phy0208","phy0209","phy0210"],
["phy0301","phy0302","phy0303","phy0304","phy0305","phy0306","phy0307","phy0308","phy0309",]]
}
)} bgColor={'#124076'} textColor={'#fff'}/>


<Subjects title={"Chemistry"} image={require('../assets/images/h2o.png')} onClick={()=>navigation.navigate('SubjectChapter',{
mode:mode,
subject:"Chemistry",
chapters:["Nature and composition of substances",
"Atomic structure","Radioactivity","Chemical Bonding","Oxidation and Reduction","Acids Bases and Salt"],
sets: [
  ["chem0101","chem0102","chem0103",],
["chem0201","chem0202","chem0203","chem0204","chem0205",],
["chem0301","chem0302","chem0303",]
,["chem0401","chem0402",],
["chem0501","chem0502",],
["chem0601","chem0602","chem0603",]


]

})}  bgColor={'lightgreen'}/>

<Subjects title={"Biology"}  image={require('../assets/images/botany.png')} onClick={()=>navigation.navigate('SubjectChapter',
{
  mode:mode,
  subject:"Biology",
  chapters:["Botony And Branches","Classification Of Plant Kingdom","Micro Oragnisms","Taxonomy Of Angiosperm","Morphology Of Plant","Plant Physiology","Plant","Plant Tissue","Plant Disease","Branches Of Zoology","Animal Kingdom"],
  sets:[
    ["bio0101","bio0102"],
  ["bio0201",],
  ["bio0301","bio0302","bio0303","bio0304","bio0305","bio0306","bio0307","bio0308"],
  ["bio0401","bio0402","bio0403","bio0404",],
  ["bio0501","bio0502","bio0503","bio0504","bio0505","bio0506","bio0507"],
  ["bio0601","bio0602","bio0603","bio0604","bio0605","bio0606","bio0607","bio0608","bio0609"],
  ["bio0701",],

 ["bio0801","bio0802"],["bio0901","bio0902"],
 ["bio1001","bio1002","bio1003",],
 ["bio1101","bio1102","bio1103","bio1104","bio1105","bio1111","bio1107","bio1108","bio1109","bio1110"],


]
  
  }
)} bgColor={'#FFE7E7'}/>



  
</View>

</LinearGradient>
{/* 
{  appVersion == updatedVersion? null : <Text>You need to update this app</Text>}

<Modal visible={modalVisibleUpdate}>
  <View style={{width:width,height:height,backgroundColor:' rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center',position:'absolute',top:0}}> 
<View style={{width:'90%',backgroundColor:"white",borderRadius:20,paddingVertical:30,justifyContent:'center',alignItems:'center'}}>
  <Text style={{fontSize:22,fontWeight:'700',}}>{"New app version " + updatedVersion +  " available."}</Text>

  <View style={{width:'80%',padding:20,backgroundColor:'lightgreen',borderRadius:15,marginVertical:20}}>
  <Text style={{color:'black' ,fontWeight:'500',fontSize:16 }}>{message}</Text>
</View>

<TouchableOpacity onPress={()=>{console.log("App is being updated")
setModalVisibleUpdate(false)
}} style={{width:'90%',backgroundColor:'green',height:50,justifyContent:'center',alignItems:'center',borderRadius:13}}>
  <Text style={{color:'white',fontWeight:'500'}}>Update Now</Text>

</TouchableOpacity>
</View>


  </View>
</Modal> */}

  </>
  )
}

export default Home

const styles = StyleSheet.create({
  linearGradient: {
    
    paddingBottom:8,
    borderRadius: 5,
    justifyContent:'space-between'
    ,flexDirection:'row'
    ,flex:1
  },
})