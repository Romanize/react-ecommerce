import React, {useEffect, useState} from 'react'
import './index.css'
import ItemDetail from '../../components/ItemDetail'

function ItemDetailContainer({ handleCart }) {

    const [item, setItem] = useState({})

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch("./json/products.json")
            const result = await response.json()

            setItem(result[0])
        }
        fetchData()
    },[])

    return (
        <div>
            <div className='ItemDetailContainer'>
                {item && <ItemDetail item={item} handleCart={handleCart}/>}
            </div> 
        </div>
    )
}

export default ItemDetailContainer
