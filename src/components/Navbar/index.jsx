import './index.css';
import CartWidget from '../CartWidget';
import logo from '../../assets/BrandLogo.png'
import { BrandName, links } from '../../config'
import { Link } from 'react-router-dom'


const Navbar = ({cart}) => {

    const nav = []
    for(let link in links){ //TODO -- LINK TO REQUIRED
        nav.push(<Link to={links[link]} className="NavbarLink" key={link}>{link} </Link>) 
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
                <ul>
                    <li><Link to="/category/zapatos">Zapatos</Link></li>
                    <li><Link to="/category/remeras">Remeras</Link></li>
                    <li><Link to="/category/pantalones">Pantalones</Link></li>
                    <li><Link to="/category/juguetes">Juguetes</Link></li>
                </ul>
                {/* {nav} */}
                <CartWidget cart={cart}/>
            </div>
        </div>
     );
}
 
export default Navbar;