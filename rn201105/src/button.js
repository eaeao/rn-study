import React from 'react';
import styled from 'styled-components/native';



const Container = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: ${props=>props.backgroundColor?props.backgroundColor:'gray'};
`;
const Text = styled.Text`
    color: white;
`;

export default function button({backgroundColor}) {
    return (
        <Container backgroundColor={backgroundColor}>
            <Text>StoryBook!</Text>
        </Container>
    );
};


