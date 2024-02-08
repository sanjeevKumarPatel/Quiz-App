import { ActivityIndicator, Image, ScrollView, StatusBar, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import Header from '../components/Header';
import Subjects from '../components/Subjects';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-7036694557736762/7656612630';

const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);
const Playground = ({ route }) => {
  const navigation = useNavigation();

  const { set, subject, chapter, level, totalLevel } = route.params


  const [currentIndex, setCurrentIndex] = useState(0)
  const [points, setPoints] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [questions, setQuestions] = useState([])
  const currentQuestion = questions[currentIndex]

  const [answers,setAnswers] = useState([]);
 
  const correctAnswer = currentQuestion?.correctAnswer;

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


useEffect(()=>{

  if(selectedAnswer !== null){
    if(selectedAnswer === correctAnswer){
      setPoints((points)=>points + 10)
      answers.push({question: currentIndex + 1 , answer:true})
    }else{
      answers.push({question: currentIndex + 1 , answer:false})
    }
  }
},[selectedAnswer])





  const progressPercentage = Math.floor(((currentIndex + 1) / questions.length) * 100);


  const handleBackgroundColor = (option) => {
    if (selectedAnswer !== null && correctAnswer == option) {
      return { backgroundColor: "#A8DF8E" }
    } else if (
      selectedAnswer == option && correctAnswer == option
    ) {
      return { backgroundColor: "#A8DF8E" }
    } else if (selectedAnswer == option && correctAnswer !== selectedAnswer) {
      return { backgroundColor: '#FF6868' }
    }

  }


  return (
    <View style={{flex:1,position:'relative'}}>

      {/* /////////------------ header--------- ///////////////////    */}
 

      <Header leftIcon={require('../assets/images/back.png')} title={"Quiz"} RightIcon={require('../assets/images/dots.png')} onClickLeftIcon={()=>navigation.goBack()}/>


      <View style={{ height: 4, width: `${progressPercentage}%`, backgroundColor: 'green' }}>



      </View>
      {/* ---------------- Subject and Sets and level ------------ */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12 }}>

        <Animatable.Text animation={'bounceIn'}  style={styles.text}>{subject} </Animatable.Text>
        <Text style={[styles.text]}>
          Score: {points}
        </Text>
      </View>

      <View>




      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, }}>

        <Animatable.Text animation={'bounce'} style={styles.text}> Que_ {currentIndex + 1}/{questions.length}</Animatable.Text>
        

      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Animatable.Text animation={'bounce'} style={styles.text}>
          {chapter}_{level}/{totalLevel}
        </Animatable.Text >
      </View>
      {/* --------------- Questions  ------------------- */}

      <View style={{ padding: 10 }}>
        <Animatable.Text animation={'fadeInRight'} style={{ borderWidth: .5, padding: 8, fontSize: 18, fontWeight: '600', color: 'darkblue', borderRadius: 2,marginBottom:4 }}>
          Q.{currentIndex + 1}_ {currentQuestion ? currentQuestion?.question : <ActivityIndicator   />}
        </Animatable.Text>

        {/* ------------------ opttions for select answers ------------ */}


        <AnimatableTouchableOpacity activeOpacity={.8} animation={'fadeInLeft'}
          style={[styles.options, handleBackgroundColor("a")]}
          onPress={() => {
            if (currentQuestion && selectedAnswer === null) { setSelectedAnswer("a") }
          }}>
          <Text style={styles.optionText}>
            A. {currentQuestion?.optionA}
          </Text>
        </AnimatableTouchableOpacity>

        <AnimatableTouchableOpacity   activeOpacity={.8}  animation={'fadeInLeft'}
          style={[styles.options, handleBackgroundColor("b")]}
          onPress={() => {
            if (currentQuestion && selectedAnswer === null) {
              setSelectedAnswer("b")
            }
          }}>
          <Text style={styles.optionText}>
            B. {currentQuestion?.optionB}
          </Text>
        </AnimatableTouchableOpacity>


        <AnimatableTouchableOpacity  activeOpacity={.8}   animation={'fadeInLeft'}
          style={[styles.options, handleBackgroundColor("c")]}
          onPress={() => {
            if (currentQuestion && selectedAnswer === null) {
              setSelectedAnswer("c")
            }
          }}>
          <Text style={styles.optionText}>
            C. {currentQuestion?.optionC}
          </Text>
        </AnimatableTouchableOpacity>

        <AnimatableTouchableOpacity activeOpacity={.8} animation={'fadeInLeft'}
          style={[styles.options, handleBackgroundColor("d")]}
          onPress={() => {
            if (currentQuestion && selectedAnswer === null) {
              setSelectedAnswer("d")
            }
          }}>
          <Text  style={styles.optionText}>
            D. {currentQuestion?.optionD}
          </Text>
        </AnimatableTouchableOpacity>


      </View>

      
      {/* <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    /> 
 */}


      {/* ===========   Explainations ===================== */}

      {
        (selectedAnswer !== null) ?
          <View style={{ marginHorizontal: 14, backgroundColor: "white", }}>
            <Animatable.Text animation="slideInUp" style={{ paddingTop: 12, textAlign: 'center', fontWeight: '800', fontSize: 16, textDecorationLine: 'underline', marginBottom: -1, }}>Explaination</Animatable.Text>
            <ScrollView style={{height:100}}>
              <Animatable.Text animation="slideInUp" direction="alternate" style={{ paddingHorizontal: 10, fontSize: 16, fontWeight: '500', color: 'black' }}>

                {currentQuestion?.explaination}

              </Animatable.Text>
            </ScrollView>
          </View>
          : null

      }
      {/* ====================================================   */}
      <View style={{ flexDirection: 'row', position: 'absolute', bottom: 20 ,right:10,opacity:.8}}>
       


        {/* /// Submit buttton  and next button */}

        {(currentIndex + 1 === questions.length) ? <TouchableOpacity
          onPress={() => { 
            selectedAnswer !== null ? (navigation.navigate('Results',{points:points,answers:answers}),
            setSelectedAnswer(null)) :  Alert.alert("Hi..",'First selecet any option then press Submit button')

          }}
          style={{ justifyContent: 'flex-end', paddingRight: 14, alignItems: 'flex-end', }}>
       <Animatable.Image animation={'bounce'}  iterationCount={4} source={require('../assets/images/check.png')} style={{height:65,width:65,}}/>

        </TouchableOpacity>
          : <TouchableOpacity
            onPress={() => {
              selectedAnswer !== null ? setCurrentIndex(currentIndex => currentIndex + 1) : Alert.alert("Hi..",'First selecet any option then press next button')
              setSelectedAnswer(null)

            }}
            style={{  paddingRight: 14, alignItems: 'flex-end',  }}>
            <Animatable.Image source={require('../assets/images/next.png')} style={{ height: 65, width: 65 }} animation={'pulse'} iterationCount={30} />


          </TouchableOpacity>
        }

      </View>

    </View>
  )
}

export default Playground

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 16, fontWeight: '600',
  },
  options: {
    paddingHorizontal: 20, margin: 4, borderRadius: 4, justifyContent: 'center', paddingTop: 12, paddingBottom: 12, backgroundColor: 'white', elevation: 3
  }
  , optionText: {
    fontSize: 16, fontWeight: '600', textAlignVertical: 'center'
  }
})