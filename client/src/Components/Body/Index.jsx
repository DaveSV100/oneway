import { useContext } from 'react';
import { ColorSchemeContext } from '../../Context/ColorSchemeProvider';
import './App.css'

const Body = () => {

    const colorScheme = useContext(ColorSchemeContext);

    return (
        <div>
            <img className='cover-picture' src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
            <div>
                <ul className='titles flex justify-around'>
                    <li><a href="">Quienes somos</a></li>
                    <li><a href="">Servicios</a></li>
                    <li><a href="">Contaco</a></li>
                </ul>
            </div>
            <h2 className=''>Quienes somos</h2>
                <p>
Somos una empresa joven con talento 100% mexicano dedicada a dar mantenimiento a
elevadores de personal y carga. Contamos con amplia experiencia en elevadores de todas las marcas. Nuestro colaboradores reciben capacitación constantemente por los que te podemos garantizar una servicio totalmente profesional. Nos distingue la honestidad jamás hemos hecho ni haremos "reparaciones fantasma" y si un problema nos supera siempre buscamos la mejor solución. Trabajamos en la Ciudad de México y zona metropolitana, así como en el interior de toda la república.</p>
            <h2>Servicios</h2>
            <div className={`body-text ${colorScheme}`}>
                <ul>
                    <li className=''>Elevadores</li>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus reiciendis debitis. Non provident praesentium ratione odio labore ipsam expedita iure quaerat excepturi voluptate vitae facilis animi, sunt natus est et deleniti quia fugit! Voluptatem aut autem error delectus saepe quae? Quas autem velit doloremque, officiis odit ab iste voluptatem vel, laboriosam a quis dolorum, nostrum ut asperiores eveniet natus eius necessitatibus ex. Voluptates esse dignissimos nostrum debitis minima, qui fugiat est odio assumenda eum exercitationem dolores quibusdam!</p>
                    <li>Circuito cerrado de videovigilancia</li>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus reiciendis debitis. Non provident praesentium ratione odio labore ipsam expedita iure quaerat excepturi voluptate vitae facilis animi, sunt natus est et deleniti quia fugit! Voluptatem aut autem error delectus saepe quae? Quas autem velit doloremque, officiis odit ab iste voluptatem vel, laboriosam a quis dolorum, nostrum ut asperiores eveniet natus eius necessitatibus ex. Voluptates esse dignissimos nostrum debitis minima, qui fugiat est odio assumenda eum exercitationem dolores quibusdam!</p>
                    <li>Espacios inteligentes</li>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus reiciendis debitis. Non provident praesentium ratione odio labore ipsam expedita iure quaerat excepturi voluptate vitae facilis animi, sunt natus est et deleniti quia fugit! Voluptatem aut autem error delectus saepe quae? Quas autem velit doloremque, officiis odit ab iste voluptatem vel, laboriosam a quis dolorum, nostrum ut asperiores eveniet natus eius necessitatibus ex. Voluptates esse dignissimos nostrum debitis minima, qui fugiat est odio assumenda eum exercitationem dolores quibusdam! </p>
                </ul>
                <h2>Contacto</h2>

            </div>

        </div>
    )
}
export default Body;