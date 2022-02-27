import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/Card.css';

function Card(props) {
    //FIXME: Only text is clickable, add div
    return (
        <div id="cardAnchor">
            <NavLink className="no-deco" to={`/${props.anchor}/i?id=${props.id}`}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </NavLink>
        </div>
    );
}

export default React.memo(Card);
