
import { Link }                 from "react-router-dom"
import logo                     from "../assets/logo.png"
import search                   from "../assets/search.png"
import { HashLink }             from "react-router-hash-link"

function Header() {
    return (
        <header>
            <div className="navigation">
                <img src={logo} alt="logo" /> 
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/toutes-nos-plantes">Plantes</Link>
                    <HashLink smooth to="/#bestsellers">Meilleures ventes</HashLink>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
            <div className="search">
                <input type="text" placeholder="Rechercher" />
                <button><img src={search} alt="" /></button>
            </div>
        </header>
    )
}

export default Header