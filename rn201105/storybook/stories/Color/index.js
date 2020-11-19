import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

export default function Color({ onPress, children }) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

Color.defaultProps = {
  children: null,
  onPress: () => {},
};

Color.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
