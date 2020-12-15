import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Color from './color'

import {useSelector, useDispatch} from 'react-redux';
import {saturation} from '../stores/actions';

export default function CounterScreen({route, navigation}) {
    const onPressButton = () => {
        navigation.navigate('Color',hslsturation);
    };
    const hslsturation = useSelector((state) => state.colorcount);
    const dispatch = useDispatch();

    const onPressPlus = (n) => {
        const copy = [...hslsturation];
        if (n === 10 ? copy[1] < 100 : copy[1] > 0) {
            dispatch(saturation.count(copy, n));
        }
        console.log('hslsturation : ', hslsturation);
    };

  return (
    <View style={styles.contents}>
        <Text style={styles.text}>{hslsturation[1]}</Text>
        <View style={styles.btns}>
            <TouchableOpacity onPress={() => onPressPlus(10)}>
                <Text style={styles.btn}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressPlus(-10)}>
                <Text style={styles.btn}>-</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onPressButton}>
            <Text>Counter</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    contents: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    },
    btn: {
        backgroundColor: 'powderblue',
        fontSize: 50,
        margin: 5,
    },
    btns: {
        flexDirection: 'row',
    },
});
