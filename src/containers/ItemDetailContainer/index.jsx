import React, {useEffect, useState, useContext} from 'react'
import ItemDetail from '../../components/ItemDetail'
import {useParams} from 'react-router-dom'
import Loader from '../../components/Loader'
import { CartContext } from '../../contexts/CartContext'
import './index.css'

function ItemDetailContainer() {
    const {id} = useParams()

    const [item, setItem] = useState(null)
    const { items } = useContext(CartContext)

    useEffect(()=>{
        if(items){
            const itemFound = items.docs.find(item=>item.id === id)
            setItem(itemFound)
        }
    },[id, items])

    return (
        <div>
            {!item ? 
                <Loader /> 
                :
                <div className="ItemDetailContainer">
                    <ItemDetail item={item}/>
                </div>
            }
        </div>
    )
}

export default ItemDetailContainer
