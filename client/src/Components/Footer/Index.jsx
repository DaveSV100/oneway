import { useContext } from 'react'
import { ColorSchemeContext } from '../../Context/ColorSchemeProvider';
import './App.css'
import phone from '../../assets/phone-white.png'
import mail from '../../assets/mail-white.png'
import whatsapp from '../../assets/whatsapp-white.png'

const Footer = () => {
    const colorScheme = useContext(ColorSchemeContext);
    return (
        <div className={`footer ${colorScheme}`}>
            <div className='footer-container'>
                <a href="tel:4821143699">
                    <img src={phone} alt="telefono" className='us-container_icon'></img>
                    4821143699
                </a>
                <a href="https://wa.me/524821143699?text=Deseo saber más información.">
                    <img src={whatsapp} alt="whatsapp" className='us-container_icon'></img>
                    4821143699
                </a>
                <a href="mailto:contacto@infinistart.com?subject=Información%20&body=Deseo%20saber%20más%20información">
                    <img src={mail} alt="correo" className='us-container_icon'></img>
                    contacto@infinistart.com
                </a>
            </div>
            <p>©️ infinistart. Inifnitas ideas</p>
        </div>
    )
}
export default Footer;