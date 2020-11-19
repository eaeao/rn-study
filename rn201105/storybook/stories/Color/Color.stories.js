import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import Button from '.';
import CenterView from '../CenterView';
import CButton from '../../../src/button';
import Color from '../../../src/color';
import ControlButton from '../../../src/ControlButton';

storiesOf('Color', module)
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
  .add('color', () => React.createElement(() => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    return (<Color index={1} selected={selectedIndex === 1} setSelectedIndex={setSelectedIndex} hue={10} saturation={100} />)
  }))
  .add('controlbutton', () => React.createElement(() => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [saturations, setSaturations] = useState([100, 100, 100, 100, 100]);

    const Overlay = styled.View`
    position: absolute;
    flexDirection: row
    `;

    return (
      <Overlay>
        <ControlButton num={10} buttonText={'+'} saturations={saturations} selectedIndex={selectedIndex} />
      </Overlay>
    )
  }));

  // .add('color', () => (() => {
  //   const [selectedIndex, setSelectedIndex] = useState(null)
  //   return <Color index={1} selected={true} setSelectedIndex={setSelectedIndex} hue={10} saturation={100} />
  // }
  // ))