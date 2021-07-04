import React, {useState} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

import ItemCount from '../ItemCount'

const ItemDetail = ({item}) => {

    const [addedItem,setAddedItem] = useState(null)

    const onAdd = (qtytoAdd) => {
        setAddedItem(qtytoAdd)
    }

    const isAvailable = item.stock > 0

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
                {isAvailable ? 
                    (addedItem ? 
                        <div>
                            <button><Link to='/cart' />Checkout</button> 
                        </div>
                    : 
                        <ItemCount item={item} onAdd={onAdd}/>)
                 : 
                 <p>Out of stock</p>}
                
            </div>
        </div>
    )
}

export default ItemDetail
