import React, {useEffect, useState} from 'react'
import ItemDetail from '../../components/ItemDetail'
import {useParams} from 'react-router-dom'
import './index.css'

function ItemDetailContainer() {
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
        <div className="ItemDetailContainer">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer
