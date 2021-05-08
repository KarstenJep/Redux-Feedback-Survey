import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const feelingReducer = (state={}, action) => {
    console.log('In feeling reducer', state, action.payload);
    if (action.type === 'FEELING') {
        return action.payload
    }
    return state
}

const contentReducer = (state={}, action) => {
    console.log('In content reducer', state, action.payload);
    if (action.type === 'CONTENT') {
        return  action.payload
    }
    return state
}

const supportedReducer = (state={}, action) => {
    console.log('In support reducer', state, action.payload);
    if (action.type === 'SUPPORTED') {
        return action.payload
    }
    return state
}

const commentsReducer = (state=[], action) => {
    console.log('In comment reducer', state, action.payload);
    if (action.type === 'COMMENTS') {
        return action.payload
    }
    return state
}



const store = createStore(
    combineReducers({
        feelingReducer,
        contentReducer,
        supportedReducer,
        commentsReducer
    }),
    applyMiddleware(logger),
)


ReactDOM.render(
    <React.StrictMode>
         <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
     document.getElementById('root'));
    registerServiceWorker();
