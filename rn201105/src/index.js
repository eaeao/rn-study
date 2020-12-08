import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, FlatList, Pressable} from 'react-native';
import Color from './color';
import styled from 'styled-components/native';

const Contents = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  alignitems: center;
`;

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Btns = styled.View`
  position: absolute;
  flexdirection: row;
`;

const Btn = styled.Text`
  backgroundcolor: powderblue;
  fontsize: 50px;
  margin: 5px;
`;

const Index: () => React$Node = () => {
  const [colors, setColors] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const copyPaste = [];
    for (let i = 0; i <= 360; i = i + 10) {
      copyPaste.push([i, 100]);
    }
    setColors(copyPaste);
  }, []);

  const onPressPlus = (n) => {
    if (selectedIndex !== null) {
      const copy = [...colors];
      if (
        n === 10 ? copy[selectedIndex][1] < 100 : copy[selectedIndex][1] > 0
      ) {
        copy[selectedIndex][1] = copy[selectedIndex][1] + n;
      }
      setColors(copy);
      console.log('selectedIndex : ', selectedIndex);
    }
  };

  return (
    <Contents>
      <Container>
        <FlatList
          data={colors}
          keyExtractor={(item) => {
            return item.toString();
          }}
          renderItem={({item, index}) => (
            <Color
              hue={item}
              index={index.toString()}
              selected={selectedIndex === index.toString()}
              setSelectedIndex={setSelectedIndex}
            />
          )}
        />
      </Container>
      <Btns>
        <Pressable onPress={() => onPressPlus(10)}>
          <Btn>+</Btn>
        </Pressable>
        <Pressable onPress={() => onPressPlus(-10)}>
          <Btn>-</Btn>
        </Pressable>
      </Btns>
    </Contents>
  );
};

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
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
export default Index;
