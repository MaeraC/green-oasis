import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Plants() {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        fetchImages()
    })

    const fetchImages = async () => {
        try {
            const response = await fetch("datas.json")
            const data = await response.json()
            setPlants(data.plants)
        }
        catch (error) {
            console.error("Error fetching images:", error)
        }
    }

    return (
        <section className="plants" id="plants">
            <div className="title">
                <h1>Nos plantes</h1>
                <span></span>
            </div>
            <div className="container">
                {plants.map((image, index) => (
                    <Link to="/toutes-nos-plantes" key={index}>
                    <figure>
                        <img src={image.url} alt={image.name} />
                        <figcaption>
                            <div className="name">
                                <h2>{image.name}</h2>
                                <button className="shop">+</button>
                            </div>
                            <div className="price">
                                <p className="old-price">{image.oldPrice}€</p>
                                <p className="new-price">{image.price}€</p>
                            </div>
                        </figcaption>
                    </figure>
                </Link>
                ))}
            </div>
            <Link to="/toutes-nos-plantes" className="button link" >Voir toutes nos plantes</Link>
        </section>
    )
}

export default Plants