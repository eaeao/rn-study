import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
const TouchableOpacity = styled.TouchableOpacity`
${(props) =>
  props.disabled
    ? `border-color: #d9d9d9;
       background-color: #f5f5f5;`
    : ``}
${(props) =>
    props.type === 'primary'
      ? `background-color: #1890ff;
       border-color: #1890ff;`
      : `color: black;
       background-color: #fff; 
       border: 1px solid #d9d9d9;`}
${(props) =>
    props.size === 'large'
      ? `padding-top: 6.4px;
        padding-bottom: 6.4px;
        padding-left: 15px;
        padding-right: 15px;
      `
      : ``}
${(props) =>
    props.size === 'default'
      ? `padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 15px;
        padding-right: 15px;
      `
      : ``}
${(props) =>
    props.size === 'small'
      ? `padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 7px;
        padding-right: 7px;
      `
      : ``}
${(props) =>
    props.danger
      ? `color: #ff4d4f; border-color: #ff4d4f;`
      : ''}
${(props) =>
    props.type === 'text'
      ? `border: none;
         background-color: transparent;`
      : ``}
${(props) =>
    props.type === 'dashed'
      ? `border-color: #d9d9d9;
       border-style: dashed`
      : ``}
${(props) =>
    props.type === 'link'
      ? `border: none;
       background-color: transparent;`
      : ``}
`;

const Text = styled.Text`
${(props) =>
  props.disabled
    ? `rgba(0,0,0,0.25);`
    : ``}
${(props) =>
    props.type === 'primary'
      ? `color: white; `
      : `color: black;`}
${(props) =>
    props.danger
      ? `color: #ff4d4f;`
      : ''}
${(props) =>
    props.type === 'link'
      ? `color: #1890ff;`
      : ``}
${(props) =>
    props.size === 'large'
      ? `font-size: 16px;`
      : `font-size: 14px`}
`;


export default function Button(props) {
  const {children, onPress, type, size, danger, disabled} = props;
  return (
    <TouchableOpacity onPress={onPress} size={size} type={type} danger={danger} disabled={disabled}>
      <Text type={type} danger={danger} disabled={disabled}>{children}</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  children: null,
  onPress: () => { },
  type: '',
  size: 'default',
  danger: false,
  disabled: false,
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
};
