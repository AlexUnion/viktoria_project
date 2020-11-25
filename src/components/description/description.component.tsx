import React from "react";
import './description.style.scss';
import Title from "../title/title.component";

import { ReactComponent as Shef } from "../../assets/chef.svg";
import { ReactComponent as Glocery } from "../../assets/grocery.svg";
import { ReactComponent as Recipe } from "../../assets/recipe.svg";
import Milk from "../../assets/MilkCake.png";

const title: string = 'Чому ми';

function Description(): JSX.Element {
    return (
        <div className='description montserrat'>
            <Title title={title}/>
            <div className='description_container'>
                <p className='description_text'>Наша місія — це розділити з вами любов до десертів. Ідея створювати для вас солоденьке з’явилась тоді, коли ми захотіли відродити смак дитинства. Не стримуйте себе, оберіть ваш ідеальний тортик. </p>
                <div className='description_inner'>
                    <div className='description_item'>
                        <Shef className='logo_item'/>
                        <p>
                            Готуємо власними руками з дотриманням всіх правил безпеки
                        </p>
                    </div>
                    <div className='description_item'>
                        <Glocery className='logo_item'/>
                        <p>
                            Ми обираємо тільки найкращі продукти, наче випікаємо для себе
                        </p>
                    </div>
                    <div className='description_item'>
                        <Recipe className='logo_item'/>
                        <p>
                            Використовуємо класичні рецепти приготування
                        </p>
                    </div>
                </div>
            </div>
            <img src={Milk} alt="" className='milk'/>
        </div>
    );
}

export default Description;
