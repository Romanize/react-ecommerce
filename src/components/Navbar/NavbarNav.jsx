import React from 'react'
import './NavbarNav.css'
import NavbarLink from './NavbarLink'

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
        </div>
    )
}

export default NavbarNav
