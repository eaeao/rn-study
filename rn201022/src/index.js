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
import Color from './color';

const Index: () => React$Node = () => {
    const [saturation, setSaturation] = useState(0);

    const onPressBtn = useCallback(n => {
        setSaturation(saturation + n);
        console.log("sa1 = " + saturation);
    }, [saturation]);
    return (
        <View style={styles.container}>
            <Color hue={0} saturation={saturation} index = {0}/>
            <Color hue={30} saturation={saturation} index = {1}/>
            <Color hue={60} saturation={saturation} index = {2}/>
            <Color hue={120} saturation={saturation} index = {3}/>
            <Color hue={210} saturation={saturation} index = {4}/>
            <Color hue={240} saturation={saturation} index = {5}/>
            <Color hue={270} saturation={saturation} index = {6}/>
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.overlayBtn} onPress={() => onPressBtn(10)}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.overlayBtn} onPress={() => onPressBtn(-10)}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    overlay: {
        position: 'absolute',
        flexDirection: 'row'
    },

    overlayBtn: {
        backgroundColor: 'white',
        padding: 20,
        margin: 10
    }
});

export default Index;
