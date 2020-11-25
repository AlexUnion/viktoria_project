import React from "react";
import './orders.style.scss';
import orderInterface from "../../interfaces/order.interface";

import Title from "../title/title.component";
import Cake from "../cake/cake.component";

const title: string = 'Що випікаємо';

function Orders(props: {orders: Array<orderInterface>}): JSX.Element {

    const { orders } = props;

    return (
        <div className='orders_container'>
            <Title title={title}/>
            <div className='orders'>
                {orders.map(({title,
                                 id,
                                 weight,
                                 description,
                                 price,
                                 url}
                                 ) => (
                    <Cake key={id}
                          title={title}
                          description={description}
                          weight={weight}
                          url={url}
                          price={price} handleClick={() => {}}/>
                ))}
            </div>
        </div>
    )
}

export default Orders;
