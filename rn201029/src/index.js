import React, { useState, useCallback } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Color from './color';

const Index: () => React$Node = () => {
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [saturations, setSaturations] = useState([100, 100, 100, 100, 100, 100, 100]);

    const onPress = useCallback((n) => {
        if (selectedIndex !== null) {
            const _saturation = saturations[selectedIndex] + n
            if (_saturation >= 0 && _saturation <= 100) {
                const _saturations = saturations.slice()
                _saturations[selectedIndex] = _saturation
                setSaturations(_saturations)
            }
        }
    }, [selectedIndex, saturations])

    return (
        <View style={styles.container}>
            {[0, 30, 60, 120, 210, 240, 270].map((n, i) => (
                <Color
                    key={i}
                    index={i}
                    selected={selectedIndex === i}
                    setSelectedIndex={setSelectedIndex}
                    hue={n}
                    saturation={saturations[i]}
                />
            ))}
            <View style={styles.overlay}>
                <TouchableOpacity
                    style={styles.overlayBtn}
                    onPress={() => onPress(10)}
                >
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.overlayBtn}
                    onPress={() => onPress(-10)}
                >
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
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
