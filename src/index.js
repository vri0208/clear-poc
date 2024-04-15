//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import './custom.scss';
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Header from './components/Header';
import Body from './components/Body';
import Table from './components/Table';



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body />
    <Table />
  </React.StrictMode>,
  document.getElementById('root')
);