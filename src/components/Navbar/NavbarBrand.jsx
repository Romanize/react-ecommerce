import React from 'react';
import './NavbarBrand.css';
import logo from './NavbarBrand--Logo.png'

const NavbarBrand = () => {
    const brand__name = 'SOLODEPORTES';

    return ( 
        <div className="NavbarBrand">
            <a href="/index">
                <img src={logo} alt="Brand Logo" />
                {brand__name}
            </a>
        </div>
     );
}
 
export default NavbarBrand;