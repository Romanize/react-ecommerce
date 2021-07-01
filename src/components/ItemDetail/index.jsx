import React from 'react'
import './index.css'

import Counter from '../Counter'

const ItemDetail = ({item, handleCart}) => {
    return (
        <div className='ItemDetailWrapper'>
            <div>
                <h1>{item.title}</h1>
                <img src={item.pictureURL} alt="Cualquier Cosa"/>
            </div>
            <div>
                <h3>Descripción: {item.description}</h3>
                <span>Precio:{item.price}</span><br />
                <span>Stock : {item.stock}</span>
                <Counter item={item} handleCart={handleCart}/>
            </div>
        </div>
    )
}

export default ItemDetail
