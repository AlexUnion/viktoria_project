import React from 'react';
import './navBar.style.scss';
import { ReactComponent as Logo } from "../../assets/logo1.svg";
import { ReactComponent as FaceBook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";

function NavBar(): JSX.Element {
    return (
        <div className='nav_container'>
            <Logo className='logo'/>
            <div className='navigation'>
                <div className='navigation_item'>
                    Хто ми
                </div>
                <div className='navigation_item'>
                    Що випікаємо
                </div>
                <div className='navigation_item' onClick={() => {window.location.href = '#description'; return false;}}>
                    Чому ми
                </div>
                <div className='navigation_item'>
                    Доставка
                </div>
                <div className='navigation_item'>
                    Контакти
                </div>
            </div>
            <div className='contacts'>
                <a href="https://instagram.com/blackwhite_cake?igshid=cric0p2x09g8">
                    <Instagram className='contact_item'/>
                </a>
                <a href="https://www.facebook.com/BWCakes-104777324802492">
                    <FaceBook className='contact_item'/>
                </a>
            </div>
        </div>
    )
}

export default NavBar;
