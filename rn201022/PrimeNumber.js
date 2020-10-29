/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


const App: () => React$Node = () => {
  const [count, setCount] = useState(0)
  const [primecount, setPrimeNumber] = useState(0)
  useEffect(() =>{
    setInterval(()=>{
      setCount((prev) => {
        
        let arr = [];
        for (let i = 1; i<=prev; i++){
          arr.push(i);
        }
        for (let i = 1; i*i<prev; i++ ){
          if(arr[i]){
            let num = arr[i]
            for (let j = num * num; j<=prev; j+= num ){
              arr[j-1]= 0;
            }
          }
        }
        let answer = arr.filter((number)=>number);
        answer.shift();
        setPrimeNumber(answer.length)        
        return prev + 1;
      })
    }, 1000)
  },[])
  return (
    <>
        <View style={styles.body}>
          <Text style={styles.footer}>{`Count : ${count}`}</Text>
          <Text style={styles.footer}>{`Prime Count : ${primecount}`}</Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer:{
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center'
  }
});

export default App;
