
import delivery from "../assets/delivery.png"
import support from "../assets/support.png"
import garantie from "../assets/garantie.png"
import gift from "../assets/goft.png"

function Avantages() {
    return (
        <section className="avantages">
            <div className="box">
                <img src={delivery} alt="" />
                <div>
                    <p className="title">Livraison express et gratuite</p>
                    <p className="txt">Livraison gratuite pour toutes commandes de plus de 39€</p>
                </div>
            </div>
            <div className="box">
                <img src={support} alt="" />
                <div>
                    <p className="title">Service client 24h/24</p>
                    <p className="txt">Support client disponible à toute heure</p>
                </div>
            </div>
            <div className="box">
                <img src={garantie} alt="" />
                <div>
                    <p className="title">Garantie offerte</p>
                    <p className="txt">Nous vous remboursons dans les 30 jours</p>
                </div>
            </div>
            <div className="box">
                <img src={gift} alt="" />
                <div>
                    <p className="title">Cadeaux pour nos membres</p>
                    <p className="txt">Rejoignez-nous et bénéficiez de nos promtions</p>
                </div>
            </div>
        </section>
    )
}

export default Avantages