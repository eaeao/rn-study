import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const TouchableOpacity = styled.TouchableOpacity`
  width: 80px;
  height: 35px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 4px
  border: 1px;
  ${(props) => props.pirmary ? `border-color: #2e7eff; background-color: #2e7eff;` : ''}
  ${(props) => props.dashed ? 'border-style: dashed;' : ''}
  ${(props) => props.danger ? 'border-color: red; ':''}
  ${(props) => props.text ? 'border: 0px; background-color: transparent;':''}
  ${(props) => props.block ? 'width:100%':''}
  ${(props) => props.large ? 'width:100px; height: 50px':''}
  ${(props) => props.small ? 'width:60px; height: 30px':''}
  ${(props) => props.absolute ? 'position: absolute;':''}
`;

const Text = styled.Text`
  font-size: 14px;
  color: #000;
  ${(props) => props.pirmary ? `color: white;` : ''}
  ${(props) => props.danger ? `color: red;` : ''}
  ${(props) => props.link ? `color: #2e7eff;` : ''}
  ${(props) => props.large ? `font-size: 18px` : ''}
`;


export default function Button(props) {
  const {onPress, value, disabled} = props;
  return (
    <TouchableOpacity {...props} onPress={onPress}>
      <Text {...props} onPress={undefined}>{value}</Text>
    </TouchableOpacity>
);
}

Button.defaultProps = {
  onPress: () => {},
};

Button.propTypes = {
  onPress: PropTypes.func,
};
