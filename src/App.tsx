import React from 'react';
import './App.css';

import NavBar from "./components/navBar/navBar.component";
import Header from "./components/header/header.component";
import Orders from "./components/orders/orders.component";

function App(): JSX.Element {
  return (
      <div className='container'>
        <NavBar/>
        <Header/>
        <Orders/>
      </div>
);
}

export default App;
