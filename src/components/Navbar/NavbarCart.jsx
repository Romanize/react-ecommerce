import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton, Badge } from '@material-ui/core';
import './NavbarCart.css';

function NavbarCart() {
    return (
        <div>
            <IconButton className="NavbarCart">
                <Badge badgeContent={"?"} className="navbarCart__Badge">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </div>
    )
}

export default NavbarCart
