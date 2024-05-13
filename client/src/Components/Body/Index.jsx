import { useContext } from 'react';
import { ColorSchemeContext } from '../../Context/ColorSchemeProvider';
import './App.css'

const Body = () => {

    const colorScheme = useContext(ColorSchemeContext);

    return (
        <body>
            <div className='top'>
                <img className='cover-picture' src="https://images.pexels.com/photos/257856/pexels-photo-257856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <div className='title'>
                    <h1>Mantenimiento de edificios</h1>
                </div>
            </div>
            <div id="us" >
                <h2 className='subtitle'>Quienes somos</h2>
                <p>
                    Somos una empresa joven con talento 100% mexicano dedicada a dar mantenimiento a
                    elevadores de personal y carga. Contamos con amplia experiencia en elevadores de todas las marcas. 
                </p>
            </div>
            <div id='services'>
                <h2>Servicios</h2>
                <div className={`body-text ${colorScheme}`}>
                    <ol>
                        <li className=''>Mantenimiento personalizado a tu Elevador</li>
                        <li>Nuevas instalaciones</li>
                        <li>Modernizaciones</li>
                        <li>Control de accedo y CCTV</li>
                        <li>Espacios inteligentes</li>
                        <li>Llamado de emergencias 24/7</li>
                    </ol>
                </div>
            </div>
            <div id='whyUs'>
                <h2>Por qué elegirnos</h2>
                <p>Nuestro colaboradores reciben capacitación constantemente por los que te podemos garantizar una servicio totalmente profesional. Nos distingue la honestidad jamás hemos hecho ni haremos "reparaciones fantasma" y si un problema nos supera siempre buscamos la mejor solución. Trabajamos en la Ciudad de México y zona metropolitana, así como en el interior de toda la república.</p>
            </div>
        </body>
    )
}
export default Body;