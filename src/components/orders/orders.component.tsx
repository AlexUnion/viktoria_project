import React from "react";
import './orders.style.scss';
import Title from "../title/title.component";

const title: string = 'Що випікаємо';

function Orders(): JSX.Element {
    return (
        <div className='orders_container'>
            <Title title={title}/>
        </div>
    )
}

export default Orders;
