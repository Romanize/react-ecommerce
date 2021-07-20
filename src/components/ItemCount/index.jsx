import {useState, useContext} from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton } from '@material-ui/core';
import './index.css'
import {CartContext} from '../../contexts/CartContext'

function ItemCount({item, onAdd}) {

    const { addItem } = useContext(CartContext)

    const [qty,setQty] = useState(1)

    const handleReduceClick = () => {
        if(qty>1) setQty(qty-1)
    }

    const handleAddClick = () => {
        if(qty<item.data().stock) setQty(qty+1)
    }

    const handleInputChange = (e) => {
        let value = e.target.value;
        console.log(typeof value, value)
        if(value>item.data().stock || value<0) {
            setQty(qty)
            return alert('Invalid quantity')
        }
        setQty(Number(value))
    }

    return (
        <>
            <div className="ItemCounter">
                <button onClick={handleReduceClick}>-</button>
                <input type="number" className="ItemCounter__input" value={qty} onChange={(e)=>handleInputChange(e)}/>
                <button onClick={handleAddClick}>+</button>
                {/* <span className="ItemCounter__error">Invalid Number</span> */}
            </div>
            <IconButton>
                
            </IconButton>
            <button className='ItemCounter__cartButton' onClick={()=>{
                onAdd(qty);
                addItem(item,qty)
            }}>
                <ShoppingCartIcon/> Add to Cart
            </button>
        </>
    )
}

export default ItemCount
