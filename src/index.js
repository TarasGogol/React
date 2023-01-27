import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) =>{
    root.render(
        <React.StrictMode>
            <App store={store}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState());

store.subscribe(() =>{
    let state = store.getState();
    rerenderEntireTree(state);
});