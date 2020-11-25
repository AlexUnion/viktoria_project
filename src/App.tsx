import React from 'react';
import './App.scss';
import orderInterface from "./interfaces/order.interface";

import NavBar from "./components/navBar/navBar.component";
import Header from "./components/header/header.component";
import Orders from "./components/orders/orders.component";

const orders: Array<orderInterface> = [
    {
        id: 0,
        title: 'Торт "Наполеон" класичний',
        weight: 1200,
        description: 'Виготовлений з листкового тіста домашнього приготування та ніжного заварного крема. Прикрашений сезонними фруктами.',
        price: 350,
        url: 'Nap2-mini.png',
    },
    {
        id: 1,
        title: 'Тістечка “Брауні”',
        weight: 1000,
        description: 'Виготовлені з ніжного масляного бісквіта з додавання шоколаду, ягід та горішків. Прикрашені цукровою пудрою та м’ятою.',
        price: 300,
        url: 'Brownie2-mini.png',
    }
]

function App(): JSX.Element {
  return (
      <div className='container'>
        <NavBar/>
        <Header/>
        <Orders orders={orders}/>
      </div>
);
}

export default App;
