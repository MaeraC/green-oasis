
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import livraison from "./assets/delivery.png"
import client from "./assets/support.png"
import garantie from "./assets/garantie.png"
import Header from "./components/Header"
import HeaderPage from "./components/HeaderPage"
import Footer from "./components/Footer"
import Loader from "./components/Loader"

function Product() {
    const { index } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetchProduct()
    })

    const fetchProduct = async () => {
        const response = await fetch("/datas.json")
        const data = await response.json()
        setProduct(data.allPlants[index])
    }

    if (!product) {
        return <Loader />
    }

    return (
        <>
        <Header />
        <HeaderPage />
        <section className="product-page">
            <div className="product">
                <img src={`.${product.url}`} alt={product.name} />
                <div className="infos">
                    <div className="head">
                        <h1>{product.name}</h1>
                        <ul>
                            <li>{product.oldPrice}</li>
                            <li className="button">{product.price}€</li>
                        </ul>
                    </div>
                    <div className="description">
                        {product.description}
                    </div>
                    <ul className="btn-cart">
                        <button className="button">Ajouter au panier</button>
                        <div>
                            <label htmlFor="quantity">Quantité</label>
                            <input type="number" name="quantity" />
                        </div>
                    </ul>
                    <ul className="garantees">
                        <li><img src={livraison} alt="livraison express" /> Livraison express à domicile</li>
                        <li><img src={client} alt="service client" />Service client personnalisé</li>
                        <li><img src={garantie} alt="garantie" />Garantie jusqu'à 20 jours</li>
                    </ul>
                </div>
            </div>
        </section>
        <Footer />
        </>
       
    )
}

export default Product