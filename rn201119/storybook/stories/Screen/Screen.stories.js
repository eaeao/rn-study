import React from 'react';
import styled from 'styled-components/native';
import {storiesOf} from '@storybook/react-native';
import Color from '../Screen/Color';

const CenterView = styled.View`
  flex: 1;
  background-color: #fff;
`;

storiesOf('Screen|Screen', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('컬러 컴포넌트', () => <Color />);
