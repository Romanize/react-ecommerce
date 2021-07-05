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
            <div className='ItemDetailWrapper__pictures'>
                <img src={item.pictureURL} alt={item.title}/> 
            </div>
            <div className="ItemDetailWrapper__content">
                <h4>{item.brand}</h4>
                <h1>{item.title}</h1>
                <p>{item.description}</p> 
                {item.stock ? <p>{'Stock: '+item.stock}</p> : <p  style={{color:'var(--red)'}}>No hay Stock</p>}
                <p>Precio:{item.price}</p><br/>
                {addedItem ? 
                    <div><Link to='/cart' ><button className='ItemDetailWrapper__cartButton'>Checkout</button></Link></div>
                : 
                    <ItemCount item={item} onAdd={onAdd}/>}             
            </div>
        </div>
    )
}

export default ItemDetail
