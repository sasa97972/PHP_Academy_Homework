import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './app.jsx';

const initialState = [
    'Smells like spirit',
    'Enter Sandman',
    'Enter Sandman2',
];

function playlist(state = initialState, action) {
    switch(action.type){
        case "ADD_TRACK":
            return [
                ...state,
                action.payload
            ];
        case "DELETE_TRACK":
            let newItem = state.slice();
            newItem.splice(action.payload, 1);
            return newItem;
        default:
            return state;
    }
}

const store = createStore(playlist,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.querySelector('.root')
    )
};

render(App);