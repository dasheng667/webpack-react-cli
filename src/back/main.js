
import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './component/App';
import store from './store';

console.log(store);
console.log(store.getState());


const render = () => {
    ReactDOM.render(<App 
        store={store.getState()}
        dispatch={store.dispatch}
    />, document.getElementById('root'));
}

render()

store.subscribe(render)