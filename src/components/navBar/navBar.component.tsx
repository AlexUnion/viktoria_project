import React from 'react';
import './navBar.style.scss';
import { ReactComponent as Logo } from "../../assets/logo.svg";
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
                <div className='navigation_item'>
                    Чому ми
                </div>
                <div className='navigation_item'>
                    Контакти
                </div>
            </div>
            <div className='contacts'>
                <Instagram className='contact_item'/>
                <FaceBook className='contact_item'/>
            </div>
        </div>
    )
}

export default NavBar;
