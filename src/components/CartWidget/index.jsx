import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge } from '@material-ui/core';
import './index.css'

function CartWidget() {
    return (
        <div>
            <IconButton>
                <Badge badgeContent="0" className="Cart__Badge">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </div>
    )
}

export default CartWidget
