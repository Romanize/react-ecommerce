import React, {useState} from 'react'

function Counter({stock, id}) {

    const [qty,setQty] = useState(0)

    const reduceQty = () => {
        if(qty>0){
            setQty(qty-1)
        }
    }
    const sumQty = () => {
        if(qty<=stock){
            setQty(qty+1)
        }
    }

    return (
        <div>
            <button onClick={reduceQty}>-</button>
            <input type="text" id={'Product'+id} value={qty} readOnly/>
            <button onClick={sumQty}>+</button>
        </div>
    )
}

export default Counter
