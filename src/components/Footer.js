
import logo from "../assets/logo.png"

function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <img src={logo} alt="logo" />
                <p>Green Oasis</p>
            </div>
            
            <ul>
                <li>Infos générales</li>
                <li>Conditions générales de vente</li>
                <li>Politique de confidentialité</li>
                <li>Mentions légales</li>
                <li>Service Client</li>
            </ul>
            <ul>
                <li>Réseaux sociaux</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>TikTok</li>
            </ul>
            <div className="newsletter">
                <p>S'inscrire à notre Newsletter</p>
                <div>
                    <input type="text" placeholder="Ton adresse e-mail" />
                    <button>Valider</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer