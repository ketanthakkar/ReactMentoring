import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Main from './Main';

ReactDOM.render(
    <Provider>
        <Main />
    </Provider>,
    document.getElementById('root')
);