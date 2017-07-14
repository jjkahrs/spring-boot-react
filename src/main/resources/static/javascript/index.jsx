import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import CounterButton from './components/CounterButton';


const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <CounterButton/>
    </Provider>,
    document.getElementById('content')
);