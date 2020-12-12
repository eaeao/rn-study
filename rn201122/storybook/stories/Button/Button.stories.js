import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Button from '.';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('primary button', () => (
    <Button onPress={action('clicked-text')} type="primary" >
      {text('Button text', 'Primary')}
    </Button>
  ))
  .add('link button', () => (
    <Button onPress={action('clicked-text')} type="link" >
      {text('Button text', 'link')}
    </Button>
  ))
  .add('default button', () => (
    <Button onPress={action('clicked-text')}  >
      {text('Button text', 'default')}
    </Button>
  ))
  .add('dashed button', () => (
    <Button onPress={action('clicked-text')} type="dashed" >
      {text('Button text', 'dashed')}
    </Button>
  ))
  .add('Text button', () => (
    <Button onPress={action('clicked-text')} type="text" >
      {text('Button text', 'text')}
    </Button>
  ))
  .add('size button', () => (
    <Button onPress={action('clicked-text')} type="text" size="large">
      {text('Button text', 'text')}
    </Button>
  ))
  .add('Text button', () => (
    <Button onPress={action('clicked-text')} type="dashed" danger>
      {text('Button text', 'text')}
    </Button>
  ))
 ;
