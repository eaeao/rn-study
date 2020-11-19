import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Text } from 'react-native';
import Button from '.';
import CenterView from '../CenterView';
import CButton from '../../../src/button';
import Color from '../../../src/color';


storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ))
  .add('test', () => (
    <CButton backgroundColor={text('color', 'yellow')}></CButton>
  ))
  .add('color', () => React.createElement(()=>{
    const [selectedIndex, setSelectedIndex] = useState(null);
    return (<Color index={1} selected={selectedIndex === 1} setSelectedIndex={setSelectedIndex} hue={10} saturation={100} />)
  }));

  // .add('color', () => (() => {
  //   const [selectedIndex, setSelectedIndex] = useState(null)
  //   return <Color index={1} selected={true} setSelectedIndex={setSelectedIndex} hue={10} saturation={100} />
  // }
  // ))