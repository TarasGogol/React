import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id:1, message:'Hi, how are you?', likesCount: 12},
    {id:2, message:'It\'s my first post', likesCount: 16},
];
let dialogs = [
    {id:1, name:'Taras'},
    {id:2, name:'Vasyl'},
    {id:3, name:'Viktor'},
    {id:4, name:'Vika'},
    {id:5, name:'Valera'},
    {id:6, name:'Dima'},
];
let messages = [
    {id:1, message:'Hello'},
    {id:2, message:'How are you?'},
    {id:3, message:'Yo'},
    {id:4, message:'Yo'},
    {id:5, message:'Ya'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
