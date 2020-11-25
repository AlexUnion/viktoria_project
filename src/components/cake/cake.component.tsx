import React from "react";
import './cake.style.scss';

function Cake(props: {title: string}): JSX.Element {
    const { title } = props;
    return (
        <div>
            {title}
        </div>
    )
}

export default Cake;
