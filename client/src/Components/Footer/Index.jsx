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
                <a href="tel:4821088377">
                    <img src={phone} alt="telefono" className='us-container_icon'></img>
                    4821088377
                </a>
                <a href="https://wa.me/524821088377?text=Deseo saber más información.">
                    <img src={whatsapp} alt="whatsapp" className='us-container_icon'></img>
                    4821088377git
                </a>
                <a href="mailto:info@huastex.com?subject=Información%20&body=Deseo%20saber%20más%20información">
                    <img src={mail} alt="correo" className='us-container_icon'></img>
                    info@huastex.com
                </a>
            </div>
            <p>©️ huasteX. Innovando la tecnología</p>
        </div>
    )
}
export default Footer;