import {useState} from 'react'
import './index.css'

function Counter({item, handleCart}) {

    const [qty,setQty] = useState(0)

    const reduceQty = () => {
        if(qty>0){
            setQty(qty-1)
        }
    }
    const sumQty = () => {
        if(qty<item.stock){
            setQty(qty+1)
        }
    }

    return (
        <>
            <div className="ItemCounter">
                <button onClick={reduceQty}>-</button>
                <input type="text" id={'Item'+item.id} value={qty} readOnly/>
                <button onClick={sumQty}>+</button>
            </div>
            <button onClick={()=> handleCart(item)}>BUY</button>
        </>
    )
}

export default Counter
