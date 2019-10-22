
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';
import { gameReducer } from './reducers/index';

import GameContainer from './containers/GameContainer';
import App from './components/App'



const store = createStore(gameReducer, devToolsEnhancer());



ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('root'));
