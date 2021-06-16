import React from 'react';
import './index.css';
import NavbarCart from './NavbarCart';
import { Typography } from '@material-ui/core';
import logo from '../../assets/BrandLogo.png'


const Navbar = ({cart}) => {

    const links = {
        "Home": "/index",
        "About": "/about",
        "Contact": "/contact",
        "Account": "/account",
    }

    const nav = []
    for(let link in links){
        nav.push(<a href={links[link]} className="NavbarLink" key={link}>{link} </a>) 
    }

    return ( 
        <div className="Navbar">
            <div className="NavbarBrand">
                <a href="/index">
                    <img src={logo} alt="Brand Logo" />
                    <Typography variant="h6" color="inherit">
                        Brand Name
                    </Typography>
                </a>
            </div>
            <div className="NavbarNav">
                {nav}
                <NavbarCart cart={cart}/>
            </div>
        </div>
     );
}
 
export default Navbar;