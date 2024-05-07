import logo from "../../assets/logo1.png"

const Navbar = () => {
    return (
        <nav>
            <div> 
                <a href="" target="_blank">
                    <img src={logo} className="logo" alt="OneWay logo" />
                </a>
                <h1 className=''>Mantenimiento integral de edificios</h1>
                <a>
                    <p>5617012444</p>
                </a>
                <a>
                    <p>contacto@one-way.com.mx</p>
                </a>
            </div>
        </nav>
    )
}
export default Navbar