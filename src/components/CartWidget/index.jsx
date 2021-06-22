import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge } from '@material-ui/core';
import './index.css'

function CartWidget({cart}) {
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
