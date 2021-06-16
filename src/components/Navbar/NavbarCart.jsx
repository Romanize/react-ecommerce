import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge } from '@material-ui/core';
import './NavbarCart.css'

function NavbarCart({cart}) {
    return (
        <div>
            <IconButton className="NavbarCart">
                <Badge badgeContent={cart.length || '0'} className="navbarCart__Badge">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </div>
    )
}

export default NavbarCart
