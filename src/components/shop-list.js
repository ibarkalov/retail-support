import React from 'react';

import ShopListItem from './shop-list-item';
import './shop-list.css';

const ShopList = ({ info }) => {
    
    const elements = info.map((item) => {

        const { id, ...itemProps} = item;

        return(
            <li key={id} className="list-group-item">
                <ShopListItem {...itemProps} />
            </li>
        );
    });

    return (
            <ul className="list-group shop-list">
                { elements }    
            </ul>          
    )
}

export default ShopList