import React from "react";
import './header.style.scss';
import { ReactComponent as Cake } from "../../assets/cake.svg";

function Header(): JSX.Element {
    return (
        <div className='header_container'>
            <div className='header_inner'>
                <h1>Black and White Cakes</h1>
                <img src="/to_left_arrow.png" alt=""/>
                <div className='content'>Тортики домашнього приготування за классичними рецептами</div>
                <div className='link_container'>
                    <a href="#" className='montserrat btn btn_white'>Замовити</a>
                    <a href="#" className='montserrat btn btn_transparent'>Переглянути</a>
                </div>
            </div>
            <Cake className='cake'/>
        </div>
    )
}

export default Header;
