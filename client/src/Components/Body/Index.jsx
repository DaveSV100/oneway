import { useContext } from 'react';
import { ColorSchemeContext } from '../../Context/ColorSchemeProvider';
import tec from '../../assets/software-solutions.jpg'
import ai from '../../assets/ai.jpg'
import ios from '../../assets/ios.png'
import robotic from '../../assets/robotic.jpg'
import mac from '../../assets/mac.jpg'
import web from '../../assets/web.jpg'
import db from '../../assets/db.jpg'
import us from '../../assets/us.jpg'
import phone from '../../assets/phone.png'
import phoneWhite from '../../assets/phone-white.png'
import mail from '../../assets/mail.png'
import mailWhite from '../../assets/mail-white.png'
import whatsapp from '../../assets/whatsapp.png'
import whatsappWhite from '../../assets/whatsapp-white.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'

import './App.css'

const Body = () => {

    const colorScheme = useContext(ColorSchemeContext);

    const getIcon = (iconLight, iconDark) => {
        return colorScheme === 'dark' ? iconDark : iconLight;
    };
    
  

    return (
        <div className={`body ${colorScheme}`}>
            <div className='top'>
                <img className='cover-picture' src={tec}></img>
                <div className={`title ${colorScheme}`}>
                    <h1>Software solutions</h1>
                    <h2 className='title-h2'>Innovando tecnología</h2>
                    <p>
                        Desarrollamos todo tipo de tecnología para empresas, negocios, instituciones, organizaciones y para todo el que quiera innovar su proyecto
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
                    <a href="tel:4821088377">
                        <img src={getIcon(phone, phoneWhite)} alt="telefono" className='us-container_icon'></img>
                            4821088377
                    </a>
                    <a href="https://wa.me/4821088377?text=Deseo saber más información sobre desarrollo de software.">
                        <img src={getIcon(whatsapp, whatsappWhite)} alt="whatsapp" className='us-container_icon'></img>
                        482 108 8377
                    </a>
                    <a href="mailto:info@huastex.com?subject=Información%20&body=Deseo%20saber%20más%20información%20sobre%20desarrollo%20de%20sistemas">
                        <img src={getIcon(mail, mailWhite)} alt="correo" className='us-container_icon'></img>
                        info@huastex.com
                    </a>
                </div>
            </div>
            <div id='services' className='subtitle services-subtitle'>
                <div className={`services ${colorScheme}`}>
                    <h2>Servicios</h2>
                    <div className={`body-text ${colorScheme} imgs`}>
                        {/* <ol className='imgs'> */}
                            <div>
                                <li className=''>AI</li>
                                <p>Inteligencia artificial para automizar tareas, como envío de correos, procesamiento de información, análisis de negocio</p>
                                <img src={ai} alt="ia" />
                            </div>
                            <div> 
                                <li>WebSite & WebApp</li>
                                <p>En línea en la web ofrece tus servicios, productos, administra una e-commerce y maneja bases de datos desde tu celular</p>
                                <img src={web} alt="web" />
                            </div>
                            <div>
                                <li>iOS & Android Apps</li>
                                <p>Aplicaciones para móvil, ya sea para registar las citas a tu consultorio, pagos de clientes, cuentas de usuarios, o inventario</p>
                                <img src={ios} alt="ios y android" />
                            </div>
                            <div>
                                <li>Mac, Linux & Windows Apps</li>
                                <p>Aplicaciones de escritorio, te permite poder trabajar con más velocidad o remotamente sin conexión a internet</p>
                                <img src={mac} alt="Mac, Linux y Windows" />
                            </div>
                            <div>
                                <li>Cloud DB</li>
                                <p>Bases de datos en la nube. Va mucho más allá de un Excel, ya que no tiene límite de conexiones e implementa AI</p>
                                <img src={db} alt="Bases de datos en la nube" />
                            </div>
                            <div>
                                <li>Robótica</li>
                                <p>Mediante software y hardware con impresión 3D, creamos aparatos electrónicos IoT</p>
                                <img src={robotic} alt="robot" />
                            </div>
                        {/* </ol> */}
                    </div>
                </div>
            </div>
            <div id='whyUs' className='subtitle why-us'>
                <div className="last-title">
                    <h2>Por qué elegirnos</h2>
                    <p>Tenemos una ambición insasiable por crear tecnología, por ir un paso adelante innovando y queremos que todos sean parte de la transformación . Ofrecemos precios asequibles ya que mediante herramientas de inteligencia generativa supervisada logramos hacer proyectos en tiempo récord. Facturamos todos nuestro productos y servicios.  Llevamos años trabajando en la industria de software y hardware.</p>
                </div>
                <div className='why-us_icons'>
                    <img src={icon1} className='last-img' alt="servicio" />
                    <img src={icon2} className='last-img' alt="servicio" />
                    <img src={icon3} className='last-img' alt="servicio" />
                    <img src={icon4} className='last-img' alt="servicio" />
                </div>

            </div>
        </div>
    )
}
export default Body;