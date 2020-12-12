/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { Provider } from 'react-redux';
import stores from './stores';
import Color from './screens';

const Index = () => {
    return (
        <Provider store={stores}>
            <Color />
        </Provider>
    );
};

export default Index;
