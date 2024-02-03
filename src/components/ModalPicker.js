import { StyleSheet, Text, View,TouchableOpacity,Dimensions,ScrollView } from 'react-native'
import React from 'react'


const OPTION = ["Home","Share this App", "Rate on Playstore"]
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const ModalPicker = (props) => {



  return (
    <TouchableOpacity onPress={()=>{props.changeModalVisibility(false)
    }}
    style={styles.container}
    >
<View style={[styles.modal,{padding:6}]}>
    {OPTION.map((item ,index)=>{
        return(
<TouchableOpacity activeOpacity={.8} onPress={()=> {
    if(index == 0){
console.log("first")
props.changeModalVisibility(false)
    }
    else if(index == 1 ){
console.log("second");
props.changeModalVisibility(false)
    }
    else if(index == 2 ){
        console.log("third");
        props.changeModalVisibility(false)
            }
}}>
            <Text style={{borderWidth:1,margin:2,padding:4,color:'black',fontWeight:'500',borderRadius:8,backgroundColor:'white',textAlign:'center'}}>{item}</Text>
</TouchableOpacity>
        )
    }
    )
}
</View>
    </TouchableOpacity>
  )
}

export default ModalPicker

const styles = StyleSheet.create({

    container:{
flex:1,
    },
    
    modal:{
backgroundColor:'#637A9F',borderRadius:8,right:20,top:32,position:'absolute',elevation:4
    }
})