import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../Routes';
import { Provider } from 'react-redux';
import getStore from '../store/index';

const App = () => {
    return(
        <Provider store={getStore()}>
            <BrowserRouter>
                {Routes.map((route, index) => (
                    <Route key={index} {...route} />
                ))}
            </BrowserRouter>
        </Provider>
    )
}
ReactDOM.hydrate(<App />, document.getElementById('root'));