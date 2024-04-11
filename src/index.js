//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import './custom.scss';
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Header from './components/Header';
import Body from './components/Body';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
  document.getElementById('root')
);