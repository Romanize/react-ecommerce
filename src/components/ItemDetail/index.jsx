import React, {useState,} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

import ItemCount from '../ItemCount'

const ItemDetail = ({item}) => {

    const [addedItem,setAddedItem] = useState(null)

    const onAdd = (qtytoAdd) => {
        setAddedItem(qtytoAdd)
    }

    const itemData = item.data()

    return (
        <div className='ItemDetailWrapper'>
            <div className='ItemDetailWrapper__pictures'>
                <img src={itemData.pictureURL} alt={itemData.title}/> 
            </div>
            <div className="ItemDetailWrapper__content">
                <h4>{itemData.brand}</h4>
                <h1>{itemData.title}</h1>
                <p>{itemData.description}</p> 
                {itemData.stock ? <p>{'Stock: '+itemData.stock}</p> : <p  style={{color:'var(--red)'}}>No hay Stock</p>}
                <p>Precio:{itemData.price}</p><br/>
                {addedItem ? 
                    <div><Link to='/cart' ><button className='ItemDetailWrapper__cartButton'>Checkout</button></Link></div>
                : 
                    <ItemCount item={item} onAdd={onAdd}/>}             
            </div>
        </div>
    )
}

export default ItemDetail
