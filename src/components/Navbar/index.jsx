import './index.css';
import CartWidget from '../CartWidget';
import NavDropdown from '../NavDropdown';
import logo from '../../assets/BrandLogo.png'
import { BrandName, links } from '../../config'
import { Link, NavLink } from 'react-router-dom'



const Navbar = () => {

    const navLinks = []
    for(let link in links){ //TODO -- LINK TO REQUIRED
        navLinks.push(<NavLink activeClassName="NavbarLink--active" exact to={links[link]} className="NavbarLink" key={link}>{link} </NavLink>) 
    }

    return ( 
        <div className="Navbar">
            {/* Left Side */}
            <div className="NavbarBrand">
                <Link to="/">
                    <img src={logo} alt="Brand Logo" />
                    {BrandName}
                </Link>
            </div>
            {/* Right Side */}
            <div className="NavbarNav">
                <NavDropdown /> 
                {navLinks}
                <CartWidget/>
            </div>
        </div>
     );
}
 
export default Navbar;