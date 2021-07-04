import React, {useState} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

import ItemCount from '../ItemCount'

const ItemDetail = ({item}) => {

    const [addedItem,setAddedItem] = useState(null)

    const onAdd = (qtytoAdd) => {
        setAddedItem(qtytoAdd)
    }

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
                {addedItem ? 
                    <div><Link to='/cart' ><button>Checkout</button></Link></div>
                : 
                    <ItemCount item={item} onAdd={onAdd}/>}             
            </div>
        </div>
    )
}

export default ItemDetail
