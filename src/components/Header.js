import { Image, StyleSheet, Text, TouchableOpacity, View ,Modal,Dimensions,} from 'react-native'
import React, { useState } from 'react'
import ModalPicker from './ModalPicker'



const Header = ({title,leftIcon,RightIcon,onClickLeftIcon,onClickRightIcon}) => {
 




 const [isModalVisible,setIsModalVisible] = useState(false)
 

const changeModalVisibility = (bool)=>{
  setIsModalVisible(bool)
}


  return (
    <View style={{backgroundColor:'#D63484',width:'100%',justifyContent:'space-between',flexDirection:'row',paddingLeft:15,paddingRight:15,paddingVertical:2,}}>

<TouchableOpacity style={styles.btn} onPress={onClickLeftIcon}>
<Image source={leftIcon} style={{height:25,width:25,tintColor:'#E9F6FF',}}  onClickLeftIcon/>
</TouchableOpacity>

<Text style={{color:"#E9F6FF",fontSize:22,fontWeight:'800'}}>{title}</Text>

<TouchableOpacity style={styles.btn} onPress={()=>changeModalVisibility(true)} >
<Image source={RightIcon} style={{height:25,width:25,tintColor:'#E9F6FF',}}/>
</TouchableOpacity>

<Modal 
transparent={true}
animationType='fade'
visible={isModalVisible}
nRequestClose={()=>changeModalVisibility(false)}
>
<ModalPicker changeModalVisibility={changeModalVisibility}/>
</Modal>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  btn:{
    width:40,height:40,justifyContent:'center',alignItems:'center',color:'#ffffff'

    
  }
})