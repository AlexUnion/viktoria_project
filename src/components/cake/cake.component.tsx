import React from "react";
import './cake.style.scss';
import CakeInterface from "../../interfaces/cake.interface";

function Cake(props: CakeInterface): JSX.Element {

    const { title, description, price, weight, url } = props;

    const style = {
        background: `center no-repeat no-repeat url('${process.env.PUBLIC_URL}/img/${url}')`,
        backgroundSize: 'auto 100%',
    }

    return (
        <div className='cake_container montserrat'>
            <div className='cake_img' style={style}/>
            <p className='cake_title'>{title}</p>
            <p className='cake_weight'>{`${weight} г`}</p>
            <p className='cake_description'>{description}</p>
            <div className='cake_inner'>
                <div className='cake_price'>{`${price} грн.`}</div>
                <div className='btn btn_white'>Замовити</div>
            </div>
        </div>
    )
}

export default Cake;
