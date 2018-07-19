import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store'//importamos el store de reduc

import {Provider} from 'react-redux'
import {readProducts} from './actionCreators'


store.dispatch(readProducts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
