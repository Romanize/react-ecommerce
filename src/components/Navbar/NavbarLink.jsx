import React from 'react'
import './NavbarLink.css'

function NavbarLink({title,url}) {
    return (
        <a href={url} className="NavbarLink">
            {title}
        </a>
    )
}

export default NavbarLink
