import {useContext} from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

function Cart() {

    const {cart, sumTotals, clear, removeItem} = useContext(CartContext)

    return (
        cart.length ? 
            <div>
                <div className="Cart__List">
                    {cart.map(product=>{
                        return ( 
                            <div key={product.id}>
                                <img src={product.pictureURL} alt={product.title} />
                                <h3>{product.title}</h3>
                                <span>Subtotal: {product.price * product.quantity}</span><br />
                                <span>Cantidad: {product.quantity}</span>
                                <button onClick={()=>removeItem(product.id)}>X</button> 
                            </div>
                        )
                    })}
                </div>
                <div className="Cart__Footer">
                    <p>Total: {sumTotals()}</p>
                    <button onClick={clear}>Empty Cart</button>
                </div>
            </div>
        :
            <div>
                There are no products to buy <br />
                <Link to='/'>Go to Home</Link>
            </div>      
    )
}

export default Cart
