import React from 'react';
import './NavbarBrand.css';
import { Typography } from '@material-ui/core';

import logo from './BrandLogo.png'

const NavbarBrand = () => {
    const brand__name = 'Brand Name';

    return ( 
        <div className="NavbarBrand">
            <a href="/index">
                <img src={logo} alt="Brand Logo" />
                <Typography variant="h6" color="inherit">
                    {brand__name}
                </Typography>
            </a>
        </div>
     );
}
 
export default NavbarBrand;