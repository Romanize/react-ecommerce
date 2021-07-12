import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge } from '@material-ui/core';
import { useContext } from 'react'
import {CartContext} from '../../contexts/CartContext'
import './index.css'

function CartWidget() {

    const {cart} = useContext(CartContext)
    
    return (
        <div>
            <IconButton>
                <Badge badgeContent={cart.length.toString()} className="Cart__Badge">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </div>
    )
}

export default CartWidget
