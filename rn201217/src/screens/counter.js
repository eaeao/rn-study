import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { counter } from '../stores/actions';
import {
    Text
} from 'react-native';


const Container = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;


const Btn = styled.TouchableOpacity`
    background-color: #ccc;
    padding: 10px;
    margin: 10px;
`;


const CounterScreen = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count)
    return (
        <Container>
            <Text>{count}</Text>
            <Btn onPress={() => dispatch(counter.countUp(1))}>
                <Text>+</Text>
            </Btn>
            <Btn onPress={() => dispatch(counter.countDown(1))}>
                <Text>-</Text>
            </Btn>
        </Container>
    );
}

export default CounterScreen;