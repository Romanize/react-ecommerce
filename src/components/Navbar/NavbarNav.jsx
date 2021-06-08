import React from 'react'
import './NavbarNav.css'
import NavbarLink from './NavbarLink'
import NavbarCart from './NavbarCart'

function NavbarNav() {
    return (
        <div className="NavbarNav">
            <NavbarLink 
                title='Home'
                url='/index'
            />
            <NavbarLink 
                title='About Us'
                url='/about'
            />
            <NavbarLink 
                title='Contact'
                url='/contact'
            />
            <NavbarLink 
                title='Account'
                url='/account'
            />
            <NavbarCart />
        </div>
    )
}

export default NavbarNav
