import React, { useCallback } from 'react';
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
        flex: 1
    }
});

export default Color;
