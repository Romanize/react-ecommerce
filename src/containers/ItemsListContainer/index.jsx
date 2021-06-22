import React, {useEffect, useState} from 'react'
import './index.css'
import ItemsList from '../../components/ItemsList'

function ItemsListContainer({ handleCart }) {

    const [items, setItems] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch("./json/products.json")
            const result = await response.json()
            console.log(result)
            setItems(result)
        }
        fetchData()
    },[])

    return (
        <div>
            <div className='favItemsListContainer'>
                <ItemsList items={items} handleCart={handleCart}/>
            </div> 
        </div>
    )
}

export default ItemsListContainer
