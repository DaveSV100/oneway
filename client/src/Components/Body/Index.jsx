import { useContext } from 'react';
import { ColorSchemeContext } from '../../Context/ColorSchemeProvider';
import skyscraper from '../../assets/skyscraper.jpg'
import elevator from '../../assets/elevator.png'
import network from '../../assets/network.jpg'
import iot from '../../assets/iot.jpg'
import cctv from '../../assets/cctv.jpg'
import door from '../../assets/door.jpg'
import sos from '../../assets/sos.jpg'
import final from '../../assets/us.avif'
import './App.css'

const Body = () => {

    const colorScheme = useContext(ColorSchemeContext);

    return (
        <body>
            <div className='top'>
                <img className='cover-picture' src={skyscraper}></img>
                <div className='title'>
                    <h1>Mantenimiento de edificios</h1>
                    <p>Trabajando en tu misma dirección</p>
                </div>
            </div>
            <div id="us" className='subtitle'>
                <h2 >Quienes somos</h2>
                <p>
                    Somos una empresa joven con talento 100% mexicano dedicada a dar mantenimiento a
                    elevadores de personal y carga. Contamos con amplia experiencia en elevadores de todas las marcas. 
                </p>
                <div className='us-con'>
                    <img src={elevator} alt="Elevador" />  
                </div>
            </div>
            <div id='services' className='subtitle'>
                <h2>Servicios</h2>
                <div className={`body-text ${colorScheme}`}>
                    <ol className='imgs'>
                        <div>
                            <li className=''>Mantenimiento personalizado a tu Elevador</li>
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
                            <li>Control de accedo y CCTV</li>
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
                    </ol>
                </div>
            </div>
            <div id='whyUs' className='subtitle why-us'>
                <div className="last-title">
                    <h2>Por qué elegirnos</h2>
                    <p>Nuestro colaboradores reciben capacitación constantemente por los que te podemos garantizar una servicio totalmente profesional. Nos distingue la honestidad jamás hemos hecho ni haremos "reparaciones fantasma" y si un problema nos supera siempre buscamos la mejor solución. Trabajamos en la Ciudad de México y zona metropolitana, así como en el interior de toda la república.</p>
                </div>
                <img src={final} className='last-img' alt="buildings" />
            </div>
        </body>
    )
}
export default Body;