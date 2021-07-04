import {useState} from 'react'
import './index.css'

function ItemCount({item, onAdd}) {

    const [qty,setQty] = useState(0)

    const handleReduceClick = () => {
        if(qty>0) setQty(qty-1)
    }

    const handleAddClick = () => {
        if(qty<item.stock) setQty(qty+1)
    }

    const handleInputChange = (e) => {
        let value = e.target.value;
        console.log(typeof value, value)
        if(value>item.stock || value<0) {
            setQty(qty)
            return alert('Invalid quantity')
        }
        setQty(value)
    }

    return (
        <>
            <div className="ItemCounter">
                <button onClick={handleReduceClick}>-</button>
                <input type="number" className="ItemCounter__input" value={qty} onChange={(e)=>handleInputChange(e)}/>
                <button onClick={handleAddClick}>+</button>
                {/* <span className="ItemCounter__error">Invalid Number</span> */}
            </div>
            <button onClick={()=>{onAdd(qty)}}>Add to Cart</button>
        </>
    )
}

export default ItemCount