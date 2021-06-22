import './index.css';
import CartWidget from '../CartWidget';
import logo from '../../assets/BrandLogo.png'
import { BrandName, links } from '../../config'


const Navbar = ({cart}) => {

    const nav = []
    for(let link in links){ //TODO -- LINK TO REQUIRED
        nav.push(<a href={links[link]} className="NavbarLink" key={link}>{link} </a>) 
    }

    return ( 
        <div className="Navbar">
            {/* Left Side */}
            <div className="NavbarBrand">
                <a href="/index">
                    <img src={logo} alt="Brand Logo" />
                    {BrandName}
                </a>
            </div>
            {/* Right Side */}
            <div className="NavbarNav">
                {nav}
                <CartWidget cart={cart}/>
            </div>
        </div>
     );
}
 
export default Navbar;