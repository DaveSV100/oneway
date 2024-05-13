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

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <nav>
                <div className="img-container">
                    <a href="" >
                        <img src={logo} className="logo" alt="OneWay logo" />
                    </a>
                </div>
                <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`menu ${isOpen ? 'open' : ''}`}>
                    <li><a href="#" onClick={closeMenu}>Home</a></li>
                    <li><a href="#us"onClick={closeMenu}>Quiénes somos</a></li>
                    <li><a href="#services"onClick={closeMenu}>Servicios</a></li>
                    <li><a href="#contact"onClick={closeMenu}>Contacto</a></li>
                </ul>
                
        </nav>
    )
}
export default Navbar