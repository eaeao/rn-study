import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';
import Color from './Color';

import {useSelector, useDispatch} from 'react-redux';
import {saturation} from '../stores/actions';

const Index: () => React$Node = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const hslsturation = useSelector((state) => state.colorcount);
  const dispatch = useDispatch();

  const onPressPlus = (n) => {
    if (selectedIndex !== null) {
      const copy = [...hslsturation];
      if (
        n === 10 ? copy[selectedIndex][1] < 100 : copy[selectedIndex][1] > 0
      ) {
        // copy[selectedIndex][1] = copy[selectedIndex][1] + n;
        dispatch(saturation.countUp(copy, selectedIndex, n));
      }
      console.log('selectedIndex : ', selectedIndex);
      console.log('hslsturation : ', hslsturation);
    }
  };

  return (
    <SafeAreaView style={styles.contents}>
      <View style={styles.container}>
        <FlatList
          data={hslsturation}
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
