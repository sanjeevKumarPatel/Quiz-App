import { Image, StyleSheet, Text, TouchableOpacity, View ,Modal,Dimensions, StatusBar,} from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import ModalPicker from './ModalPicker'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';



const Header = ({title,leftIcon,RightIcon,onClickLeftIcon,onClickRightIcon}) => {
 


 const [isModalVisible,setIsModalVisible] = useState(false)
 

const changeModalVisibility = (bool)=>{
  setIsModalVisible(bool)
}

console.log(StatusBar.currentHeight)
  return (
   
<>
<StatusBar translucent={true} backgroundColor={'transparent'}  barStyle="dark-content" />

<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#b2e3e6', '#aeead3',]} style={styles.linearGradient}>


{/* <TouchableOpacity style={styles.btn} onPress={onClickLeftIcon}>
<Image source={leftIcon} style={{height:18,width:18,tintColor:'#000',}} />
</TouchableOpacity> */}

<Text style={styles.buttonText}>{title.length < 23 ? title : title.slice(0,24)+ "..."  }</Text>
{/* 
<TouchableOpacity style={styles.btn} onPress={()=>changeModalVisibility(true)} >
<Image source={RightIcon} style={{height:moderateVerticalScale(18),width:moderateScale(18),tintColor:'#000',}}/>
</TouchableOpacity> */}

</LinearGradient>

<Modal 
transparent={true}
animationType='fade'
visible={isModalVisible}
nRequestClose={()=>changeModalVisibility(false)}
>
<ModalPicker changeModalVisibility={changeModalVisibility}/>
</Modal>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
  btn:{
   justifyContent:'flex-end',alignItems:'center',
    
  },
  linearGradient: {
    paddingHorizontal:moderateScale(10),paddingVertical:moderateVerticalScale(4),paddingTop:moderateVerticalScale(StatusBar.currentHeight > 50 ? StatusBar.currentHeight -15 : StatusBar.currentHeight),
   
    justifyContent:'center',alignItems:'center'
    ,flexDirection:'row'
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    
    color: '#000',
    backgroundColor: 'transparent',
  },
})