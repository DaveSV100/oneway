import lightLogo from "../../assets/logo-light.svg"
import darkLogo from "../../assets/logo-dark.svg"
import { useContext, useState } from 'react';
import { ColorSchemeContext } from '../../Context/ColorSchemeProvider';
import './App.css';


const Navbar = () => {
    const colorScheme = useContext(ColorSchemeContext);
    const logo = colorScheme === 'dark' ? darkLogo : lightLogo;
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav>
                <div className="img-container">
                    <a href="" >
                        <img src={logo} className="logo" alt="OneWay logo" />
                    </a>
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                </div>
                <ul className={`menu ${isOpen ? 'open' : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Servicios</a></li>
                </ul>
                
        </nav>
    )
}
export default Navbar