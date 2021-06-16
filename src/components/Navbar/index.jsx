import React from 'react';
import './index.css';
import NavbarBrand from './NavbarBrand';
import NavbarNav from './NavbarNav';
import NavbarCart from './NavbarCart';


const Navbar = () => {
    return ( 
        <div className="Navbar">
            <NavbarBrand />
            <div class="Navbar__right">
                <NavbarNav />
                <NavbarCart />
            </div>
        </div>
     );
}
 
export default Navbar;