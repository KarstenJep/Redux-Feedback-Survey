import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const feelingReducer = (state=0, action) => {
    console.log('In feeling reducer');
    if (action.type === 'FEELING') {
        return  action.payload
    }
    return state
}

const contentReducer = (state=0, action) => {
    console.log('In content reducer');
    if (action.type === 'CONTENT') {
        return state, action.payload
    }
    return state
}

const supportedReducer = (state=0, action) => {
    console.log('In support reducer');
    if (action.type === 'SUPPORTED') {
        return action.payload
    }
    return state
}

const commentsReducer = (state='', action) => {
    console.log('In comment reducer', action.payload);
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
