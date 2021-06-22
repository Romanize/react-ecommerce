import {useState} from 'react'
import './index.css'

function Counter({stock, id}) {

    const [qty,setQty] = useState(0)

    const handleInput = (e) => {
        const value = e.target.value;
        setQty(value)
    }

    const reduceQty = () => {
        if(qty>0){
            setQty(qty-1)
        }
    }
    const sumQty = () => {
        if(qty<stock){
            setQty(qty+1)
        }
    }

    return (
        <div className="ItemCounter">
            <button onClick={reduceQty}>-</button>
            <input type="text" id={'Item'+id} value={qty} onChange={e=>handleInput(e)}/>
            <button onClick={sumQty}>+</button>
        </div>
    )
}

export default Counter
