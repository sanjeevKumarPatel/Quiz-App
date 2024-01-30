import { ActivityIndicator, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';

const Playground = () => {
const [currentIndex,setCurrentIndex] = useState(0)
const [points,setPoints] = useState(0)
const [selectedAnswer,setSelectedAnswer] = useState(null)
const [questions,setQuestions] = useState([])
const currentQuestion = questions[currentIndex]
const correctAnswer = currentQuestion?.correctAnswer;

const getQuestions = ()=>{
  firestore().collection('EnglishQuizApp').where('identification' , "=="  ,'comp010201' ).get().then(
    query=>{ 
      
     
      const allQuestions = query.docs.map(doc =>doc.data())
     setQuestions(allQuestions);
    })
}

useEffect(()=>{

  getQuestions()
      
  
    
    
},[])
 




  return (
    <View style={{marginTop:StatusBar.currentHeight}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>

      <Text style={styles.text}>Subject: Computer</Text>
      <Text style={styles.text}>Set 1 / 4</Text>
      </View>
      <Text style={{textAlign:'center'}}>
          Question 1 / 12
        </Text>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.text}>
          Wrong Answers : 5
        </Text >
        <Text style={{fontSize:22,}}>
         Correct Answers : 2
        </Text>
      </View>

      <View style={{padding:10}}>
        <Text style={{borderWidth:.5,padding:8,fontSize:22,fontWeight:'500',color:'darkgreen',borderRadius:2}}>
          Q.{currentIndex+1}_ {currentQuestion ? currentQuestion?.question: <ActivityIndicator size='small'/>}
        </Text>




        <TouchableOpacity 
        style={[selectedAnswer == "a" && correctAnswer == selectedAnswer ? {backgroundColor:"green"} :
        selectedAnswer == "a" && correctAnswer !== 'a' ? {backgroundColor:"red"} : correctAnswer !== "a" && selectedAnswer !== 'a'  ? {backgroundColor:"white"} : null ]}
        onPress={()=>{
          if(currentQuestion){
setSelectedAnswer("a")
          }
          }}>
        <Text style={styles.optionText}>
          A. {currentQuestion?.optionA}
        </Text>
        </TouchableOpacity>




        <TouchableOpacity 
        style={[selectedAnswer == "b" && correctAnswer == selectedAnswer ? {backgroundColor:"green"} :
        selectedAnswer == "b" && correctAnswer !== 'b' ? {backgroundColor:"red"} :  selectedAnswer !== null && correctAnswer === "b" ? {backgroundColor:"green"} : null ]}
        onPress={()=>{
          if(currentQuestion){
setSelectedAnswer("b")
          }
          }}>
        <Text style={styles.optionText}>
          B. {currentQuestion?.optionB}
        </Text>
        </TouchableOpacity>


        <TouchableOpacity 
        style={[selectedAnswer == "c" && correctAnswer == selectedAnswer ? {backgroundColor:"green"} :
        selectedAnswer == "c" && correctAnswer !== 'c' ? {backgroundColor:"red"} : correctAnswer === "c" && selectedAnswer !== null  ? {backgroundColor:"white"} : null ]}
        onPress={()=>{
          if(currentQuestion){
setSelectedAnswer("c")
          }
          }}>
        <Text style={styles.optionText}>
          C. {currentQuestion?.optionC}
        </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[selectedAnswer == "d" && correctAnswer == selectedAnswer ? {backgroundColor:"green"} :
        selectedAnswer == "d" && correctAnswer !== 'd' ? {backgroundColor:"red"} : correctAnswer !== "d" && selectedAnswer !== 'd'  ? {backgroundColor:"white"} : null  , ]}
        onPress={()=>{
          if(currentQuestion){
setSelectedAnswer("d")
          }
          }}>
        <Text style={styles.optionText}>
          D. {currentQuestion?.optionD}
        </Text>
        </TouchableOpacity>
       

      </View>

    </View>
  )
}

export default Playground

const styles = StyleSheet.create({
text:{
  color:'blue',
  fontSize:24,fontWeight:'600',
},
options:{
 elevation:4,padding:8,margin:8,borderRadius:4
}
,optionText:{
  fontSize:18,fontWeight:'600',padding:4
}
})