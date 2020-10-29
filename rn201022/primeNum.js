/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const getPrimeNumber = (num) => {     
  // 1과 1000사이의 숫자 중에 소수를 구하기 위한 반복문   
    for (let i = 2; i <= num; i++) {
       let isPrimeNumber = true; 
  //1과 자기 자신을 제외한 정수 중에 나눠지는 정수가 있는지 체크     
       for (let j = 2; j < i; j++) {       
         if (i % j === 0) {         
           isPrimeNumber = false;       
         }     
       }      
  // 소수이면 결과값에 할당     
       if (isPrimeNumber) {
        if(i === num)
          return true
       }
    }
  }

const App: () => React$Node = () => {
  const[count, setCount] = useState(0);
  const[checkval, setval] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000)
  }, [])

  useEffect(() => {
    if(getPrimeNumber(count))
    {
      setval(prevcheckval => prevcheckval + 1);
    }
  }, [count])

  return (
    <>
      <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.footer}>{count}</Text>
            <Text style={styles.footer}>소수갯수 = {checkval}</Text>
          </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
  },

  footer: {
    fontSize: 50,
  },
});

export default App;
