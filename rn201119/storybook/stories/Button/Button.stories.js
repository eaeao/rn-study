import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '.';
import CenterView from '../CenterView';
import styled from 'styled-components/native';

const BtnWrapper = styled.View`
    width:100%;
    height:100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: lavender;
`;

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default Button', () => (
    <Button
        onPress={action('clicked-text')}
        value={text('Default text', 'Default')}
    />
  ))
  .add('Primary Button', () => (
      <Button
          onPress={action('clicked-text')}
          value={text('Primary text', 'Primary')}
          pirmary
      />
  ))
    .add('Dashed Button', () => (
        <Button
            onPress={action('clicked-text')}
            value={text('Dashed text', 'Dashed')}
            dashed
        />
    ))
    .add('Danger', () => (
        <Button
            onPress={action('clicked-text')}
            value={text('Danger text', 'Danger')}
            danger
        />
    ))
    .add('Text', () => (
    <Button
        onPress={action('clicked-text')}
        value={text('Text text', 'Text')}
        text
    />
    ))
    .add('Link', () => (
        <Button
            onPress={action('clicked-text')}
            value={text('Link text', 'Link')}
            text
            link
        />
    ))
    .add('Block', () => (
        <Button
            onPress={action('clicked-text')}
            value={text('Block text', 'Block')}
            block
        />
    ))
    .add('Large', () => (
        <Button
            onPress={action('clicked-text')}
            value={text('Large text', 'Large')}
            large
        />
    ))
    .add('Small', () => (
        <Button
            onPress={action('clicked-text')}
            value={text('Small text', 'Small')}
            small
        />
    ))
    .add('Disabled', () => (
        <Button
            onPress={action('clicked-text')}
            value={text('Small text', 'Small')}
            small
        />
    ));
