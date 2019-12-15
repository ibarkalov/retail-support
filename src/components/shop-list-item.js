import React from 'react';

const ShopListItem = ({ shop , important = 'false' }) => {
    
    const style = {
        color: important ? 'tomato' : 'black'
    }; 
    
    return <span style={style}>{ shop }</span>;
}

export default ShopListItem;