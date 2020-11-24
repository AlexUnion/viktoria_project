import React from "react";

import './header.style.scss';

function Header(): JSX.Element {
    return (
        <div className='header_container'>
            <div className='header_inner'>
                <h1>Black and White Cakes</h1>
                <img src="/to_left_arrow.png" alt=""/>
                <div className='content'>Тортики домашнього приготування за классичними рецептами</div>
                <div className='link_container'>
                    <a href="" className='link_item'>Замовити</a>
                    <a href="" className='link_item'>Переглянути</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
