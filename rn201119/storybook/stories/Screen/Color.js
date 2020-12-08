import React, {useState} from 'react';
import styled from 'styled-components/native';
import ColorComponent from '../Color';
import Button from '../Button';
import {action} from "@storybook/addon-actions";
import {text} from "@storybook/addon-knobs";

const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Btn = styled.View`
    position: absolute;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: powderblue;
`;


const Color = () => {
    return (
        <Container>
            <ColorComponent hue={0} selected={false}></ColorComponent>
            <ColorComponent hue={0} selected={false}></ColorComponent>
            <ColorComponent hue={0} selected={false}></ColorComponent>
            <ColorComponent hue={0} selected={false}></ColorComponent>
            <ColorComponent hue={0} selected={false}></ColorComponent>
            <ColorComponent hue={0} selected={false}></ColorComponent>
            <ColorComponent hue={0} selected={false}></ColorComponent>
            <ColorComponent hue={0} selected={false}></ColorComponent>
            <ColorComponent hue={0} selected={false}></ColorComponent>
            <ColorComponent hue={0} selected={false}></ColorComponent>
            <Btn>
                <Button
                    onPress={action('clicked-text')}
                    value={'Plus'}
                />
                <Button
                    onPress={action('clicked-text')}
                    value={'Minus'}
                />
            </Btn>
        </Container>
    );
};

export default Color;
