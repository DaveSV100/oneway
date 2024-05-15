import './App.css'
import phone from '../../assets/phone-white.png'
import mail from '../../assets/mail-white.png'
import whatsapp from '../../assets/whatsapp-white.png'

const footer = () => {
    return (
        <div className="footer">
            <div className='footer-container'>
                <a href="tel:5617012444">
                    <img src={phone} alt="telefono" className='us-container_icon'></img>
                    56 4902 4090
                </a>
                <a href="https://wa.me/525649024090?text=Deseo saber más información.">
                    <img src={whatsapp} alt="whatsapp" className='us-container_icon'></img>
                    56 4902 4090
                </a>
                <a href="mailto:contacto@one-way.com.mx?subject=Información%20&body=Deseo%20saber%20más%20información">
                    <img src={mail} alt="correo" className='us-container_icon'></img>
                    contacto@one-way.com.mx
                </a>
            </div>
            <p>©️ OneWay</p>
        </div>
    )
}
export default footer;