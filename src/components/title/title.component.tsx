import React from "react";
import './title.style.scss';

import { ReactComponent as ToLeft } from "../../assets/black_arrow_to_left.svg";
import { ReactComponent as ToRight } from "../../assets/black_arrow_to_right.svg";

function Title(props: { title: string }): JSX.Element {

    const { title } = props;

    return (
        <div className='title_container'>
            <ToRight className='arrow'/>
            <span className='title'>
                {title}
            </span>
            <ToLeft className='arrow'/>
        </div>
    )
}

export default Title;
