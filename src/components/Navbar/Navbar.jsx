import React from 'react';
import './Navbar.css';
import NavbarBrand from './NavbarBrand';
import NavbarNav from './NavbarNav';


const Navbar = () => {
    return ( 
        <div className="Navbar">
            <NavbarBrand />
            <NavbarNav />
        </div>
     );
}
 
export default Navbar;