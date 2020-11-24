import React from 'react';
import styled from 'styled-components/native';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import Button from '.';

import BtnCsPic from '~/assets/btn_cs_pic.svg';
import BtnQrScanBlack from '~/assets/btn_qrscan_qrscan_black.svg';
import BtnQrScanLightWhite from '~/assets/btn_qrscan_light_white.svg';
import BtnRentUnlock from '~/assets/btn_rent_unlock.svg';
import BtnScooterPictureOn from '~/assets/btn_scooter_picture_on.svg';

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

storiesOf('Atoms|Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <Button
      onPress={action('clicked-text')}
      value={text('Button text', '확인')}
    />
  ))
  .add('color', () => (
    <Button
      onPress={action('clicked-text')}
      value={text('Button text', '확인')}
      color={text('Button Color', '#ff5e2c')}
    />
  ))
  .add('block', () => (
    <Button
      onPress={action('clicked-text')}
      value={text('Button text', '확인')}
      block
    />
  ))
  .add('rounded', () => (
    <Button
      onPress={action('clicked-text')}
      value={text('Button text', '확인')}
      rounded
    />
  ))
  .add('disabled', () => (
    <Button
      onPress={action('clicked-text')}
      value={text('Button text', '확인')}
      disabled
    />
  ))
  .add('outlined', () => (
    <Button
      onPress={action('clicked-text')}
      value={text('Button text', '확인')}
      outlined
    />
  ))
  .add('xlarge width', () => (
    <Button
      onPress={action('clicked-text')}
      value={<BtnCsPic />}
      xlarge
      width={70}
    />
  ))
  .add('small', () => (
    <Button
      onPress={action('clicked-text')}
      value={text('Button text', '확인')}
      small
    />
  ))
  .add('xsmall', () => (
    <Button
      onPress={action('clicked-text')}
      value={text('Button text', '확인')}
      xsmall
    />
  ))
  .add('flat', () => (
    <Button
      onPress={action('clicked-text')}
      value={text('Button text', '확인')}
      flat
    />
  ))
  .add('flat underline', () => (
    <Button
      onPress={action('clicked-text')}
      value={text('Button text', '확인')}
      flat
      underline
    />
  ))
  .add('flat underline xsmall', () => (
    <Button
      onPress={action('clicked-text')}
      value={text('Button text', '확인')}
      flat
      underline
      xsmall
    />
  ))
  .add('icon circle', () => (
    <Button
      onPress={action('clicked-text')}
      value={<BtnQrScanBlack />}
      circle
    />
  ))
  .add('icon circle color', () => (
    <Button
      onPress={action('clicked-text')}
      value={<BtnQrScanLightWhite />}
      circle
      color={'#fff'}
    />
  ))
  .add('icon circle color small', () => (
    <Button
      onPress={action('clicked-text')}
      value={<BtnRentUnlock />}
      circle
      color={'#fff'}
      small
    />
  ))
  .add('icon flat', () => (
    <Button
      onPress={action('clicked-text')}
      value={<BtnScooterPictureOn />}
      flat
    />
  ))
  .add('icon flat disabled', () => (
    <Button
      onPress={action('clicked-text')}
      value={<BtnScooterPictureOn />}
      flat
      disabled
    />
  ));