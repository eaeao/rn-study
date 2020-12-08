import React, {useState} from 'react';
import {Text, Image} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Contents = styled.Pressable`
  flex: 1;
  width: 100%;
`;

const Container = styled.Text`
  width: 100%
  height: 50px;
`;

export default function ColorComponent({onPress, hue, selected}) {
  const [colors, setColors] = useState(hue);
  const [clicked, setClicked] = useState(selected);

  const onPressConsole = (e) => {
    console.log('clicked : ', clicked);
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };
  return (
    <Contents>
      <Container
        onPress={(onPress, () => onPressConsole())}
        style={[
          {backgroundColor: `hsl(${colors},100%,50%)`},
          {borderWidth: clicked ? 3 : 0},
        ]}>
      </Container>
    </Contents>
  );
}

ColorComponent.defaultProps = {
  onPress: () => {},
  hue: false,
  selected: false,
};

ColorComponent.propTypes = {
  onPress: PropTypes.func,
  hue: PropTypes.number,
  selected: PropTypes.bool,
};
