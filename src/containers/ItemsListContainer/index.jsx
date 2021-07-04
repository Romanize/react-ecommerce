import React, {useEffect, useState} from 'react'
import './index.css'
import ItemsList from '../../components/ItemsList'
import { useParams } from 'react-router-dom'

function ItemsListContainer({ handleCart }) {

    const {id} = useParams();

    const [items, setItems] = useState([])

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
            <div className='favItemsListContainer'>
                <ItemsList items={items} handleCart={handleCart}/>
            </div> 
        </div>
    )
}

export default ItemsListContainer
