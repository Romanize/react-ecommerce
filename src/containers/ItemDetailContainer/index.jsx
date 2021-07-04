import React, {useEffect, useState} from 'react'
import './index.css'
import ItemDetail from '../../components/ItemDetail'
import {useParams} from 'react-router-dom'

function ItemDetailContainer({ handleCart }) {
    const {id} = useParams()

    const [item, setItem] = useState({})

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch("/json/products.json")
            const result = await response.json()
            const item = result.find(item=>item.id === id)
            setItem(item)
        }
        fetchData()
    },[id])

    return (
        <div>
            <div className='ItemDetailContainer'>
                {item && <ItemDetail item={item} handleCart={handleCart}/>}
            </div> 
        </div>
    )
}

export default ItemDetailContainer
