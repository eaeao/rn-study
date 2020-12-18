import React from 'react';

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
