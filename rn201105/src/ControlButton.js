import React, { Children, useCallback, useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';


const OverlayBtn = styled.TouchableOpacity`
    backgroundColor: white;
    padding: 20px;
    margin: 10px;
`;

export default function ControlButton({ num, buttonText, saturations, selectedIndex, setSaturations }) {

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
        <OverlayBtn
            onPress={() => onPress(num)}
        >
            <Text>{buttonText}</Text>
        </OverlayBtn>
    );
};

