
import React, {useEffect, useCallback, useState} from 'react';
import {StyleSheet, Text, View, Pressable, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {saturation} from '../stores/actions';

export default function ColorScreen({route, navigation}) {

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
        <View
            style={[
                styles.contents,
                {
                    backgroundColor: `hsl(${hslsturation[0]}, ${hslsturation[1]}%, ${
                        hslsturation[1] / 2
                    }%)`,
                },
            ]}>
            <View style={styles.btns}>
                <TouchableOpacity onPress={() => onPressPlus(10)}>
                    <Text style={styles.btn}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressPlus(-10)}>
                    <Text style={styles.btn}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contents: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: 'powderblue',
        fontSize: 50,
        margin: 5,
    },
    btns: {
        position: 'absolute',
        flexDirection: 'row',
    },
});
