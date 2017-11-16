import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './app.jsx';
import MainLayout from './mainLayout.jsx';
import Edit from './edit.jsx'

import reducers from './reducers/index'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router>
                <MainLayout>
                    <Route exact path="/" component={App} />
                    <Route path="/edit/:trackId" component={Edit} />
                </MainLayout>
            </Router>
        </Provider>
    </AppContainer>,
    document.querySelector('.root')
);