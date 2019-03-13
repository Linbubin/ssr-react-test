import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state={}, action) => {
    return state
}

const getStore = () => createStore(reducer, applyMiddleware(thunk));

export default getStore;