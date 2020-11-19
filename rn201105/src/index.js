import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, FlatList } from 'react-native';
import Color from './color';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 100%;
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

const Overlay = styled.View`
    position: absolute;
    flexDirection: row
`;

const OverlayBtn = styled.TouchableOpacity`
    backgroundColor: white;
    padding: 20px;
    margin: 10px;
`;

const FlatContent = styled.FlatList`
    width: 100%;
    height: 100%;
`

const Index: () => React$Node = () => {
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [saturations, setSaturations] = useState([100,100,100,100,100,100,100]);
    const [hue, setHue] = useState([])
   
    useEffect(() => {
       let _hue = []
       let _saturations = []
       for(let i=0; i<360; i=i+10){
        _saturations.push(100)
        _hue.push(i)
       }
       
       setSaturations([..._saturations])
       setHue([..._hue])
      }, []);

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
        <Container>
            <FlatContent
              keyExtractor={(item,index)=>index.toString()}
              data={hue}
              renderItem={(({item,index})=>{
                return <Color
                    index={index}
                    selected={selectedIndex === index}
                    setSelectedIndex={setSelectedIndex}
                    hue={item}
                    saturation={saturations[index]}
                />
              }
            
              )}
            />
            <Overlay>
                <OverlayBtn
                    onPress={() => onPress(10)}
                >
                    <Text>+</Text>
                </OverlayBtn>
                <OverlayBtn
                    onPress={() => onPress(-10)}
                >
                    <Text>-</Text>
                </OverlayBtn>
            </Overlay>
        </Container>
    );
};



export default Index;