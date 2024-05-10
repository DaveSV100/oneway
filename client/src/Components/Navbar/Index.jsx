import logo from "../../assets/logo1.png"
import './App.css';

const Navbar = () => {
    return (
        <nav>
            <div className=""> 
                <div>
                    <a href="" >
                        <img src={logo} className="logo" alt="OneWay logo" />
                    </a>
                </div>
                <div>
                    <a href="tel:5617012444">5617012444</a>
                    <a href="mailto:contacto@one-way.com.mx?subject=Información%20&body=Deseo%20saber%20más%20información">contacto@one-way.com.mx</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar