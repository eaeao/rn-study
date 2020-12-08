import React from 'react';
import styled from 'styled-components/native';
import {storiesOf} from '@storybook/react-native';
import ColorComponent from './';

const CenterView = styled.View`
  flex: 1;
  background-color: white;
`;

storiesOf('Atoms|ColorComponent', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Color', () => (
    <ColorComponent hue={0} selected={false}></ColorComponent>
  ));
