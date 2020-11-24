import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TouchableOpacity = styled.TouchableOpacity`
  width: auto;
  min-width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-width: 0;
  border-radius: 8px;
  padding: 0 32px;
  ${(props) =>
    props.width
      ? `width: ${
          typeof props.width === 'string' ? props.width : props.width + 'px'
        }; min-width: ${
          typeof props.width === 'string' ? props.width : props.width + 'px'
        }; padding: 0;`
      : ''}
  ${(props) =>
    props.color
      ? `border-color: ${props.color}; color: ${props.color}; background-color: ${props.color};`
      : ''}
  ${(props) =>
    props.circle
      ? 'width: 50px; border-radius: 50px; padding: 0; overflow: hidden; elevation: 3; shadow-color: #000; shadow-offset: {width: 0, height: 2px}; shadow-opacity: 0.8; shadow-radius: 2px;'
      : ''}
  ${(props) =>
    props.outlined
      ? `border-width: 1.5px; border-color: ${
          props.color || '#000'
        }; background-color: #fff;`
      : ''}
  ${(props) => (props.rounded ? 'border-radius: 23px;' : '')}
  ${(props) => (props.block ? 'width: 100%;' : '')}
  ${(props) => (props.disabled ? 'background-color: #aaa;' : '')}
  ${(props) =>
    props.disabled && props.circle
      ? 'background-color: transparent; opacity: 0.7;'
      : ''}
  ${(props) =>
    props.flat
      ? 'width: auto; min-width: 0; height: auto; background-color: transparent; padding: 0; border: 0; border-radius: 0;'
      : ''}
  ${(props) =>
    props.underline
      ? `border-bottom-width: 1px; border-bottom-color: ${
          props.color || '#000'
        }};`
      : ''}
  
  ${(props) =>
    props.xsmall
      ? 'min-width: auto; height: auto; border-bottom-width: 0.7px; padding: 0;'
      : ''}
  ${(props) => (props.small ? 'height: 36px; border-bottom-width: 0.5px;' : '')}
  ${(props) =>
    props.small && props.circle
      ? 'width: 40px; min-width: 40px; height: 40px; border-bottom-width: 0.5px;'
      : ''}
  ${(props) =>
    props.xlarge ? 'height: 70px; border-bottom-width: 0.5px;' : ''}
`;

const Text = styled.Text`
  font-size: 18px;
  color: #fff;
  ${(props) => (props.outlined ? `color: ${props.color || '#000'};` : '')}
  ${(props) => (props.block ? `font-weight: bold;` : '')}
  ${(props) => (props.flat ? `color: ${props.color || '#000'};` : '')}
  ${(props) => (props.xsmall ? 'font-size: 14px;' : '')}
  ${(props) => (props.small ? 'font-size: 16px;' : '')}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')} 
  ${(props) =>
    props.height
      ? `line-height: ${
          typeof props.height === 'string' ? props.height : props.height + 'px'
        };`
      : ''}
`;

export default function Button(props) {
  const {onPress, value, disabled} = props;
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
      onPress={disabled ? null : onPress}>
      <Text {...props}>{value}</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  value: '',
  width: null,
  onPress: () => {},
  color: '#000',
  disabled: false,
  block: false,
  rounded: false,
  outlined: false,
  flat: false,
  underline: false,
  circle: false,

  xsmall: false,
  small: false,
};

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onPress: PropTypes.func,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  rounded: PropTypes.bool,
  outlined: PropTypes.bool,
  flat: PropTypes.bool,
  underline: PropTypes.bool,
  circle: PropTypes.bool,

  xsmall: PropTypes.bool,
  small: PropTypes.bool,
};