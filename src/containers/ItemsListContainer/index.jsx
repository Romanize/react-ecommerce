import React, {useEffect} from 'react'
import './index.css'
import ItemsList from '../../components/ItemsList'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import { useState } from 'react'

function ItemsListContainer() {

    const [items, setItems] = useState([])

    const {id} = useParams();

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch("/json/products.json")
            let result = await response.json()
            if(id) result = result.filter(item=>item.category === id)
            setItems(result)
        }
        fetchData()
    },[id])

    return (
        <div>
            {!items.length ? 
                <Loader /> 
                :
                <div className='favItemsListContainer'>
                    <ItemsList items={items}/>
                </div> }
        </div>
    )
}

export default ItemsListContainer
