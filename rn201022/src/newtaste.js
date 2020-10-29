import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Newtaste: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={{width: 24, height: 24}}
            source={require('./asset/notifications_none_24px.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <TouchableOpacity>
          <View style={styles.titleBox}>
            <Image
              style={{width: 64, height: 61}}
              source={require('./asset/title1.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.titleBox}>
            <Image
              style={{width: 90, height: 61}}
              source={require('./asset/title2.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.titleBox}>
            <Image
              style={{width: 82, height: 61}}
              source={require('./asset/title3.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.contents}>
        <ScrollView>
          <View style={styles.contentsHeader}>
            <View style={styles.contentsHeaderLeft}>
              <View style={styles.contentsHeaderLeftPicture}></View>
            </View>
            <View style={styles.contentsHeaderMiddle}>
              <View style={styles.contentsHeaderMiddleUpside}>
                <Text>우리에게 있어서 양다리란...</Text>
              </View>
              <View style={styles.contentsHeaderMiddleDownside}>
                <Text>마르코</Text>
              </View>
            </View>
            <View style={styles.contentsHeaderRight}>
              <View style={styles.contentsHeaderRightUpside}>
                <Text>입맛 일치도</Text>
              </View>
              <View style={styles.contentsHeaderRightDownside}>
                <Text>92%</Text>
              </View>
            </View>
          </View>

          <View style={styles.contentsBody}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('./asset/contentsBodyPicture.png')}
            />
          </View>
          <View style={styles.contentsFooter}>
            <View style={styles.contentsFooterLeft}>
              <Image
                style={{width: 14, height: 14}}
                source={require('./asset/Like.png')}
              />
              <Text>94</Text>
              <Image
                style={{width: 14, height: 14}}
                source={require('./asset/chat_bubble_outline_24px.png')}
              />
              <Text>52</Text>
            </View>
            <View style={styles.contentsFooterRight}>
              <Text>2020.02.17</Text>
              <Image
                style={{width: 35, height: 35}}
                source={require('./asset/dotdotdot_button.png')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Image
          style={{width: 31, height: 31}}
          source={require('./asset/footer_home.png')}
        />
        <Image
          style={{width: 31, height: 31}}
          source={require('./asset/footer_search.png')}
        />
        <Image
          style={{width: 31, height: 31}}
          source={require('./asset/footer_add.png')}
        />
        <Image
          style={{width: 31, height: 31}}
          source={require('./asset/footer_heart.png')}
        />
        <Image
          style={{width: 31, height: 31}}
          source={require('./asset/footer_person.png')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  header: {
    height: 54,
    backgroundColor: '#EFEE9D',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 16,
  },
  title: {
    //flex: 1,
    height: '15%',
    backgroundColor: '#D1EAA3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contents: {
    height: '71%',
    //flex: 4,
    backgroundColor: '#B8E0F6',
  },
  footer: {
    flex: 1.0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  alarmText: {
    paddingRight: 10,
  },
  titleBox: {
    width: 111,
    height: 91,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentsHeader: {
    backgroundColor: '#FFFFFF',
    height: 60,
    width: '100%',
    flexDirection: 'row',
  },
  contentsBody: {
    backgroundColor: '#C7CEEA',
    height: 375,
  },
  contentsFooter: {
    backgroundColor: '#DADAFC',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentsHeaderLeft: {
    height: '100%',
    width: '15%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 9,
    backgroundColor: 'red',
  },
  contentsHeaderLeftPicture: {
    backgroundColor: '#FFF',
    height: 40,
    width: 40,
    borderRadius: 15,
  },
  contentsHeaderMiddle: {
    backgroundColor: 'black',
    height: '100%',
    width: '69%',
  },
  contentsHeaderMiddleUpside: {
    backgroundColor: 'orange',
    justifyContent: 'flex-end',
    height: 30,
    width: '100%',
  },
  contentsHeaderMiddleDownside: {
    backgroundColor: 'orange',
    justifyContent: 'flex-start',
    height: 30,
    width: '100%',
  },
  contentsHeaderRight: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
  },
  contentsHeaderRightUpside: {
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    height: 30,
  },
  contentsHeaderRightDownside: {
    width: '17%',
    backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 30,
  },
  contentsFooterLeft: {
    backgroundColor: 'red',
    flexDirection: 'row',
    paddingLeft: 15,
    width: 100,
  },
  contentsFooterRight: {
    height: '100%',
    alignItems: 'center',
    width: '85%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingRight: 7,
  },
});
export default Newtaste;
