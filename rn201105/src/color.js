import React, { useCallback , useEffect} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: ${props=>props.backgroundColor?props.backgroundColor:'black'};
    border-width: ${props=>props.borderWidth?props.borderWidth:0}px;
`;

export default function Color({ index, selected, setSelectedIndex, hue, saturation }) {

    const onPress = useCallback(
        () => {
            if (selected) {
                setSelectedIndex(null)
            } else {
                setSelectedIndex(index)
            }
        },
        [index, selected]
    )

    useEffect(() => {
       console.log(hue)
      }, [])
    return (
        <Container
            activeOpacity={1}
            onPress={onPress}
            backgroundColor={ `hsl(${hue?hue:0}, ${saturation?saturation:0}%, ${saturation?saturation:2 / 2}%)`}
            borderWidth={`${selected ? 5 : 0}`}
        />
    );
};

