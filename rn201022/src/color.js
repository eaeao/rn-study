/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useCallback } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,

} from 'react-native';

const Color: () => React$Node = (props) => {
    const { hue, saturation, index} = props;
    const [colors, setColors] = useState([100,100,100,100,100,100,100]);
    const [select, setSelect] = useState(false);
    const [value, setValue] = useState(0);
    const [test, setTest] = useState(saturation);
    
    const OnPressSelectFlag  = useCallback((e) => {
        if(select === false) 
        {
            setSelect(true);
            setValue(1);
        }
        else if(select === true) 
        {
            setSelect(false);
            setValue(0);
        }
        console.log("s1 = " + select);
        console.log("saturation =" + saturation);
    }, [select,value]);

    const OnPressSelect = useCallback((e) => {
        const _colors = colors.slice();
        console.log(colors);
        console.log("s2 = " + select);
        console.log("test = " + test);
        setColors(_colors.map((sel, num)=>{
            
            if(num === index && select === true) sel += test;
            return sel;
        }))
    }, [select,colors,saturation, test]);

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: `hsl(${hue},${select === true ? saturation : 100}%,${select === true ? saturation/2 : 100/2}%)`}, {borderWidth: value}]} onPress={OnPressSelectFlag}>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },

    btnText: {
        width: 50,
        fontSize: 20,
        backgroundColor: 'gray',
        padding: 10,
    }
});

export default Color;
