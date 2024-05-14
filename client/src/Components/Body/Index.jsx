import { useContext } from 'react';
import { ColorSchemeContext } from '../../Context/ColorSchemeProvider';
import skyscraper from '../../assets/skyscraper.jpg'
import elevator from '../../assets/elevator.png'
import network from '../../assets/network.jpg'
import iot from '../../assets/iot.jpg'
import cctv from '../../assets/cctv.jpg'
import door from '../../assets/door.jpg'
import sos from '../../assets/sos.jpg'
import phone from '../../assets/phone.png'
import mail from '../../assets/mail.png'
import whatsapp from '../../assets/whatsapp.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'


import './App.css'

const Body = () => {

    const colorScheme = useContext(ColorSchemeContext);

    return (
        <body>
            <div className='top'>
                <img className='cover-picture' src={skyscraper}></img>
                <div className='title'>
                    <h1>Mantenimiento de edificios</h1>
                    <h2>Trabajando en tu misma dirección</h2>
                    <p>
                    Somos una empresa joven con talento 100% mexicano dedicada a dar mantenimiento a
                    elevadores de personal y carga. Contamos con amplia experiencia en elevadores de todas las marcas. 
                    </p>
                </div>
            </div>
            <div id="us" className='subtitle us-subtitle'>
                <h2 >Contáctanos</h2>
                {/* <p>
                    Somos una empresa joven con talento 100% mexicano dedicada a dar mantenimiento a
                    elevadores de personal y carga. Contamos con amplia experiencia en elevadores de todas las marcas. 
                </p> */}
                <div className='us-container'>
                    <a href="tel:5617012444">
                        <img src={phone} alt="telefono" className='us-container_icon'></img>
                        5617012444
                    </a>
                    <a href="https://wa.me/525617012444?text=Deseo saber más información.">
                        <img src={whatsapp} alt="whatsapp" className='us-container_icon'></img>
                        525617012444
                    </a>
                    <a href="mailto:contacto@one-way.com.mx?subject=Información%20&body=Deseo%20saber%20más%20información">
                        <img src={mail} alt="correo" className='us-container_icon'></img>
                        contacto@one-way.com.mx
                    </a>
                </div>
            </div>
            <div id='services' className='subtitle services-subtitle'>
                <h2>Servicios</h2>
                <div className={`body-text ${colorScheme} imgs`}>
                    {/* <ol className='imgs'> */}
                        <div>
                            <li className=''>Mantenimiento personalizado a elevadores</li>
                            <img src={elevator} alt="elevator" />
                        </div>
                        <div>
                            <li>Nuevas instalaciones</li>
                            <img src={door} alt="door" />
                        </div>
                        <div>
                            <li>Modernizaciones</li>
                            <img src={network} alt="network" />
                        </div>
                        <div>
                            <li>Control de acceso y CCTV</li>
                            <img src={cctv} alt="cctv" />
                        </div>
                        <div> 
                            <li>Espacios inteligentes</li>
                            <img src={iot} alt="iot" />
                        </div>
                        <div>
                            <li>Llamado de emergencias 24/7</li>
                            <img src={sos} alt="sos" />
                        </div>
                    {/* </ol> */}
                </div>
            </div>
            <div id='whyUs' className='subtitle why-us'>
                <div className="last-title">
                    <h2>Por qué elegirnos</h2>
                    <p>Nuestro colaboradores reciben capacitación constantemente por los que te podemos garantizar una servicio totalmente profesional. Nos distingue la honestidad jamás hemos hecho ni haremos "reparaciones fantasma" y si un problema nos supera siempre buscamos la mejor solución. Trabajamos en la Ciudad de México y zona metropolitana, así como en el interior de toda la república.</p>
                </div>
                <div className='why-us_icons'>
                    <img src={icon1} className='last-img' alt="servicio" />
                    <img src={icon2} className='last-img' alt="servicio" />
                    <img src={icon3} className='last-img' alt="servicio" />
                    <img src={icon4} className='last-img' alt="servicio" />
                </div>

            </div>
        </body>
    )
}
export default Body;