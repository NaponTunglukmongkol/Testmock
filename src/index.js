import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Error from './page/Error';
import Home from './page/Home';
import Genre from './page/Genre';
import Search from './page/Search';
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route
        index
        element={<Home />}/>
        <Route path='/genre/:genreId' element={<Genre />} />
        <Route path='/search' element={<Search />} ></Route>
      </Route>
      <Route path='*' element={<Error />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
