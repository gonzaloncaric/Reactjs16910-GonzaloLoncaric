import './Header.css'
import NavBar from './NavBar'
import buttonIcon from '../images/button-icon.svg'
const Header = () => {
    return (
        <div className="backgroundHeader">
            <NavBar/>
            <div className="container header">
                <h2>Coleccion de verano</h2>
                <a href="#">
                    <div className="iconButton">
                        <img src={buttonIcon} alt="Boton"/>
                        <button>Comprar ahora</button>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Header