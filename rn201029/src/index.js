import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';
import Color from './color';

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
    <SafeAreaView style={styles.contents}>
      <View style={styles.container}>
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
      </View>
      <View style={styles.btns}>
        <Pressable onPress={() => onPressPlus(10)}>
          <Text style={styles.btn}>+</Text>
        </Pressable>
        <Pressable onPress={() => onPressPlus(-10)}>
          <Text style={styles.btn}>-</Text>
        </Pressable>
      </View>
    </SafeAreaView>
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
