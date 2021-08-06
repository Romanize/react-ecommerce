import {useContext} from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'
import CheckoutForm from '../CheckoutForm'
import emptyCartPicture from '../../assets/emptyCart.png'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './index.css'

function Cart() {

    const {cart, sumTotals, clear, removeItem} = useContext(CartContext)

    return (
        cart.length ? 
            <div className='Cart'>
                <div className='Cart__Left'>
                    <h3 className="Cart__Title">Thank you for shopping!</h3>
                        <div className="Cart__List">
                            {cart.map((product, index)=>{
                                return ( 
                                    <div key={index} className='Cart__Item'>
                                        <img src={product.pictureURL} alt={product.title} className='Cart__Image'/>
                                        <h3>{product.title}</h3>
                                        <div className="Cart__Item--Details">
                                            <button onClick={()=>removeItem(product.id)} className="Cart__Item--Remove">
                                                <HighlightOffIcon />
                                            </button>
                                            <span>Subtotal: {product.price * product.quantity}</span><br />
                                            <span>Cantidad: {product.quantity}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    <div className="Cart__List--Footer">
                        <p>Total: <b>{sumTotals()}</b></p>
                        <button className="Cart__Clear" onClick={clear}>
                            <DeleteForeverIcon />
                            <span>Empty Cart</span>
                        </button>
                    </div>
                </div>
                <div className="Cart__Form">
                    <CheckoutForm/>
                </div>
            </div>
        :
            <div className='Cart Cart--empty'>
                <img src={emptyCartPicture} alt="Oops, your cart is empty" />
                There are no products to buy <br />
                <Link to='/'>Continue shopping...</Link>
            </div>      
    )
}

export default Cart
