/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect,useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const[left, setLeft] = useState(0);
  const[right, setRight] = useState(0);
  const[checkLeftval, setLeftval] = useState(0);
  const[checkRightval, setRightval] = useState(0);

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

  const onPressLeft = useCallback((e) => {
    if(getPrimeNumber(left + 1))
    {
      setLeftval(prevCheckval => prevCheckval + 1);
    }
    setLeft(left + 1);
  }, [left]);

  const onPressRight = useCallback((e) => {
    if(getPrimeNumber(right + 1))
    {
      setRightval(prevCheckval => prevCheckval + 1);
    }
    setRight(right + 1);
  }, [right]);

  const onPressLeftClear = useCallback((e) => {
    setLeft(0);
    setLeftval(0);
    },
    [],
  )

  const onPressRightClear = useCallback((e) => {
    setRight(0);
    setRightval(0);
    },
    [],
  )
  return (
    <>
      <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.content}>
            <Text style={styles.footer}>count : {left}</Text>
            <Text style={styles.footer}>Prime Num : {checkLeftval}</Text>
            <TouchableOpacity onPress={onPressLeft}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressLeftClear}>
              <Text style={styles.btnText}>clear</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.content}>
            <Text style={styles.footer}>count : {right}</Text>
            <Text style={styles.footer}>Prime Num : {checkRightval}</Text>
            <TouchableOpacity onPress={onPressRight}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressRightClear}>
              <Text style={styles.btnText}>clear</Text>
            </TouchableOpacity>
            </View>

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
      flexDirection: 'row',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    fontSize: 20,
  },

  btnText: {
    fontSize: 20,
    backgroundColor: 'green',
    padding: 10,
  }
});

export default App;
