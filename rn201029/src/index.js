import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, FlatList } from 'react-native';
import Color from './color';

const Index: () => React$Node = () => {
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [saturations, setSaturations] = useState([100,100,100,100,100,100,100]);
    const [hue, setHue] = useState([])
    const arr = [];
   
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
        <View style={styles.container}>
            {/* <FlatList style={styles.flatlist}
              data={arr}
              keyExtractor={(item,index)=>index.toString()}
              renderItem={(item,index)=><View style={{flex:1,justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}><Text>{item.item}{console.log(item)}</Text></View>}
            /> */}
            
      
            <FlatList
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
              style={styles.flatlist}

            />
            {/* {[0, 30, 60, 120, 210, 240, 270].map((n, i) => (
                <Color
                    key={i}
                    index={i}
                    selected={selectedIndex === i}
                    setSelectedIndex={setSelectedIndex}
                    hue={n}
                    saturation={saturations[i]}
                />
            ))} */}
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
    },
    flatlist:{
      width: '100%',
      height: '100%',
      backgroundColor: 'gray',
      
    }
});

export default Index;