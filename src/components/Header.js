import { Image, StyleSheet, Text, TouchableOpacity, View ,Modal,Dimensions, StatusBar,} from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import ModalPicker from './ModalPicker'

const height2 = (2 * StatusBar.currentHeight)


const Header = ({title,leftIcon,RightIcon,onClickLeftIcon,onClickRightIcon}) => {
 


 const [isModalVisible,setIsModalVisible] = useState(false)
 

const changeModalVisibility = (bool)=>{
  setIsModalVisible(bool)
}


  return (
   
<>
<StatusBar translucent={true} backgroundColor={'transparent'} hidden={false} barStyle="dark-content" />

<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#82d9e3', '#a4e7cd',]} style={styles.linearGradient}>


<TouchableOpacity style={styles.btn} onPress={onClickLeftIcon}>
<Image source={leftIcon} style={{height:18,width:18,tintColor:'#000',}} />
</TouchableOpacity>

<Text style={styles.buttonText}>{title.length < 23 ? title : title.slice(0,24)+ "..."  }</Text>

<TouchableOpacity style={styles.btn} onPress={()=>changeModalVisibility(true)} >
<Image source={RightIcon} style={{height:18,width:18,tintColor:'#000',}}/>
</TouchableOpacity>

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
    width:StatusBar.currentHeight,height:height2,justifyContent:'flex-end',alignItems:'center',

    
  },
  linearGradient: {
    
    paddingHorizontal:12,paddingBottom:8,
    borderRadius: 5,
    justifyContent:'space-between',alignItems:'flex-end'
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