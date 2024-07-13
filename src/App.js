import React from 'react';
import {  Router } from 'react-router-dom';


import history from './services/history';
import GlobalStyleds from './styles/globalStyleds';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyleds />
    </ Router>
  );
}

export default App;
