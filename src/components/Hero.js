import { useNavigate } from "react-router-dom"


function Hero() {
    const navigate = useNavigate()
    return (
        <section className="hero-section">
            <div className="hero">
                <div>
                    <h1>Green Oasis,<br></br>Jardin & Maison</h1>
                    <p>Découvrez une large gamme de plantes d'intérieur pour transformer et ressourcer votre maison ou jardin. Des plantes pour tous les goûts et tous les prix, idéales pour créer un espace apaisant chez vous.</p>
                    <button onClick={() => navigate("/toutes-nos-plantes")}  className="button-colored">Choisir ma plante</button>
                </div>
            </div>
        </section>
    )
}

export default Hero