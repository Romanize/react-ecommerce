import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge } from '@material-ui/core';
import { useContext } from 'react'
import {CartContext} from '../../contexts/CartContext'
import { Link } from 'react-router-dom'
import './index.css'

function CartWidget() {

    const {cart} = useContext(CartContext)

    let itemsQuantity = cart.reduce((accum, product) => accum += product.quantity, 0)
    
    return (
        <div>
            <Link to="/cart">
                <IconButton>
                    <Badge badgeContent={itemsQuantity} className="Cart__Badge">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Link>
        </div>
    )
}

export default CartWidget
