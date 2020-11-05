import React, { useCallback , useEffect} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Color: () => React$Node = (props) => {
    const { index, selected, setSelectedIndex, hue, saturation } = props;

    const onPress = useCallback(
        () => {
            if (selected) {
                setSelectedIndex(null)
            } else {
                setSelectedIndex(index)
            }
        },
        [index, selected]
    )

    useEffect(() => {
       console.log(hue)
      }, [])
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={[
                styles.container,
                {
                    borderWidth: selected ? 5 : 0,
                    backgroundColor: `hsl(${hue}, ${saturation}%, ${saturation / 2}%)`
                }
            ]}
            onPress={onPress}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50
    }
});

export default Color;
