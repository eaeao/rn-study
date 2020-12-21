import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector, useDispatch} from 'react-redux';
import {redsaturation, saturation} from '../stores/actions';

function HomeScreen() {
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
    <View style={styles.contents}>
      <Text style={styles.text}>{hslsturation[1]}</Text>
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
}

function RedHomeScreen({route}) {
  const hslsturation = useSelector((state) => state.colorcount);
  const [colors, setColors] = useState(route.params.Red);

  console.log('redhome:', route.params, 'colors: ', colors);

  return (
    <View
      style={[
        styles.contents,
        {
          backgroundColor: `hsl(${colors}, ${hslsturation[1]}%, ${
            hslsturation[1] / 2
          }%)`,
        },
      ]}
    />
  );
}

function GreenHomeScreen({route}) {
  const hslsturation = useSelector((state) => state.colorcount);
  const [colors, setColors] = useState(route.params.green);
  return (
    <View
      style={[
        styles.contents,
        {
          backgroundColor: `hsl(${colors}, ${hslsturation[1]}%, ${
            hslsturation[1] / 2
          }%)`,
        },
      ]}
    />
  );
}

function BlueHomeScreen({route}) {
  const hslsturation = useSelector((state) => state.colorcount);
  const [colors, setColors] = useState(route.params.blue);
  return (
    <View
      style={[
        styles.contents,
        {
          backgroundColor: `hsl(${colors}, ${hslsturation[1]}%, ${
            hslsturation[1] / 2
          }%)`,
        },
      ]}
    />
  );
}

const TabHome = createBottomTabNavigator();

export default function RGBHomeScreen({route, navigation}) {
  return (
    <TabHome.Navigator>
      <TabHome.Screen name="Home" component={HomeScreen} />
      <TabHome.Screen
        name="Red"
        component={RedHomeScreen}
        initialParams={{Red: 0}}
      />
      <TabHome.Screen
        name="Green"
        component={GreenHomeScreen}
        initialParams={{green: 120}}
      />
      <TabHome.Screen
        name="Blue"
        component={BlueHomeScreen}
        initialParams={{blue: 240}}
      />
    </TabHome.Navigator>
  );
}

const styles = StyleSheet.create({
  contents: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  btn: {
    backgroundColor: 'powderblue',
    fontSize: 50,
    margin: 5,
  },
  btns: {
    flexDirection: 'row',
  },
});
