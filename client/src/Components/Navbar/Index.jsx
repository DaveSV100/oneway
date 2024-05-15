import lightLogo from "../../assets/logo-light-new.png"
import darkLogo from "../../assets/logo-dark-new.png"
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

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        closeMenu();
    }
    
    return (
        <nav className={colorScheme}>
                <div className="img-container">
                    <a href="#" onClick={closeMenu}>
                        <img src={logo} className="logo" alt="OneWay logo" />
                    </a>
                </div>
                <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className={`bar ${colorScheme}2`}></div>
                    <div className={`bar ${colorScheme}2`}></div>
                </div>
                <ul className={`menu ${isOpen ? `open ${colorScheme}-open` : ''}`}>
                    <li><a href="#" onClick={closeMenu}>Home</a></li>
                    <li><a href="#us"onClick={(e) => handleSmoothScroll(e, 'us')}>Contacto</a></li>
                    <li><a href="#services"onClick={(e) => handleSmoothScroll(e, 'services')}>Servicios</a></li>
                    <li><a href="#whyUs"onClick={(e) => handleSmoothScroll(e, 'whyUs')}>Por qué elegirnos</a></li>
                    <li><a href="#contact"onClick={(e) => handleSmoothScroll(e, 'contact')}>Solicita información</a></li>
                </ul>
                
        </nav>
    )
}
export default Navbar