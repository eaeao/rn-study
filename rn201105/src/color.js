import React, {useEffect, useCallback, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';
import styled from "styled-components/native/dist/styled-components.native.esm";

const Contents = styled.Pressable`
        flex: 1;
        flexGrow: 0;
        background-color: ${props => props.BC}
        border-width: ${props=> props.borderWidth}
`;

const Container = styled.Text`
        height: 50px;
`;

const Color: (props) => React$Node = (props) => {
    const {hue, index, setSelectedIndex, selected} = props;
    const [colors, setColors] = useState(hue);

    const onPressChoice = (e) => {
        console.log('index : ', index);
        if (selected) {
            setSelectedIndex(null);
        } else {
            setSelectedIndex(index);
        }
    };

    return (
        <Contents
            BC={`hsl(${colors[0]}, ${colors[1]}%, ${colors[1] / 2}%)`}
            borderWidth={ selected ? 3 : 0}
            onPress={() => onPressChoice()}>
            <Container />
        </Contents>
    );
};

const styles = StyleSheet.create({
    contents: {
        flex: 1,
        flexGrow: 0,
    },
    container: {
        height: 50,
    },
});
export default Color;
