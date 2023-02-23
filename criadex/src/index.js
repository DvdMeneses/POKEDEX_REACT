import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import {Home} from './paginas/home';
import {BrowserRouter} from 'react-router-dom';



//const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  <BrowserRouter> 
    <Home/>
  </BrowserRouter>,
  document.getElementById( 'root')
);

