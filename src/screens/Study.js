import React,{useState,useEffect} from 'react'
import { StatusBar, StyleSheet, Text, View, FlatList ,ActivityIndicator} from 'react-native'
import firestore from '@react-native-firebase/firestore';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'

const Study = ({route}) => {
  const navigation = useNavigation();
  
  const { set, subject, chapter, level, totalLevel } = route.params

  

  const [questions, setQuestions] = useState([])


  const getQuestions = () => {
    firestore().collection('EnglishQuizApp').where('identification', "==", set).get().then(
      query => {
        const allQuestions = query.docs.map(doc => doc.data())
        setQuestions(allQuestions);
      })
  }

  useEffect(() => {
    getQuestions()

  }, [])


const correctAnswerFinder =(item)=>{
  if(
    item?.correctAnswer === 'a' 
  )return item?.optionA
else if (

item?.correctAnswer === 'b' 
  )return item?.optionB
  else if (item?.correctAnswer === 'c' 
  )return item?.optionC

  else if (item?.correctAnswer === 'd' 
  )return item?.optionD

}


  return (<>
  <StatusBar hidden={false}/>
    <Header leftIcon={require('../assets/images/back.png')} title={"Study Mode"} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.goBack()}/>


    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12 }}>

<Animatable.Text animation={'bounceIn'}  style={styles.text}>{subject} </Animatable.Text>
<Text style={[styles.text]}>
Level: {level}/{totalLevel}
</Text>
</View>

<View style={{justifyContent:'center',alignItems:'center'}}>
      <Animatable.Text animation={'bounce'} style={styles.text}>
          {chapter}
        </Animatable.Text >
      </View>
   
<View style={{marginBottom:120}}>
  <View style={{marginTop:10}}>

  {questions  == false ?   <ActivityIndicator size='large'/> :null}
  </View>

<FlatList
data={questions}
renderItem={({item,index})=>
{
 return (<View style={{marginHorizontal:12,marginBottom:6,borderColor:'gray',borderWidth:1,borderRadius:4,padding:8}}>
    <Text style={{color:'darkred' ,fontSize:18, fontWeight:'400' ,borderRadius:4}}>{`Que_${index + 1 }. ${item?.question }`}  </Text>
    {/* <Text>Answer: { item?.correctAnswer === 'a'? item?.optionA : item?.correctAnswer === 'b'? item?.optionB : item?.correctAnswer === 'c'? item.optionC : item?.correctAnswer === 'd'? item?.optionD : null}</Text> */}

<Text style={{color:'darkgreen' ,fontSize:16, fontWeight:'400',borderBottomWidth:1,borderColor:'skyblue',paddingBottom:6}}>Ans: {correctAnswerFinder(item)}</Text>
    <Text style={{color:'darkblue' ,fontSize:16 ,fontWeight:'400',marginTop:10}}>{`Explaination: ${item?.explaination}`}</Text>


    </View>
    )
  }
  }
/>
<View style={{height:10}}></View>
</View>



  </>

  )
}

export default Study

const styles = StyleSheet.create({ text: {
  color: 'blue',
  fontSize: 16, fontWeight: '600',
},
options: {
  paddingHorizontal: 20, margin: 4, borderRadius: 4, justifyContent: 'center', paddingTop: 12, paddingBottom: 12, backgroundColor: 'white', elevation: 3
}
, optionText: {
  fontSize: 16, fontWeight: '600', textAlignVertical: 'center',color:'black'
}})