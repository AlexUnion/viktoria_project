import React from 'react';
import './App.css';
import NavBar from "./components/navBar/navBar.component";
import Header from "./components/header/header.component";

function App(): JSX.Element {
  return (
      <div className='container'>
        <NavBar/>
        <Header/>
      </div>
);
}

export default App;
