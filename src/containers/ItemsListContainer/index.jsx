import React, {useEffect, useState} from 'react'
import './index.css'
import ItemsList from '../../components/ItemsList'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

function ItemsListContainer() {

    const { items } = useContext(CartContext);

    const [ result , setResult ] = useState(null);

    const { categoryId } = useParams();

    //Filter by category
    useEffect(()=>{
        if(categoryId && items){
            const itemsFound = items.docs.filter(item=>item.data().category === categoryId)
            setResult(itemsFound)
        } else if (items){
            setResult(items.docs)
        }
    },[categoryId, items])

    return (
        <div>
            {!result ? 
                <Loader /> 
                :
                <div className='favItemsListContainer'>
                    <ItemsList items={result}/>
                </div> 
            }
        </div>
    )
}

export default ItemsListContainer
