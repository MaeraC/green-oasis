import Footer from "./Footer"
import Header from "./Header"
import phone from "../assets/phone.png"
import email from "../assets/email.png"
import shop from "../assets/shop.png"


function Contact() {
    return (
        <div className="contact">
            <Header />
            <section className="content">
                <div className="infos">
                    <div>
                        <img src={shop} alt="" />
                        <h3>Notre boutique</h3>
                        <p>33 Place Albert 1er 75018</p>
                    </div>
                    <div>
                        <img src={phone} alt="" />
                        <h3>téléphone</h3>
                        <p>01 87 62 38 99</p>
                    </div>
                    <div>
                        <img src={email} alt="" />
                        <h3>e-mail</h3>
                        <p>contact@green-oasis-shop.com</p>
                    </div>
                </div>

                <div className="txt">
                    <form>
                        <label>Nom</label>
                        <input type="text" placeholder="Entrez votre nom" />
                        <label>E-mail</label> 
                        <input type="mail" placeholder="Entrez votre e-mail" />
                        <label>Message</label> 
                        <textarea placeholder="Ecrivez votre message" />
                        <button className="button-colored">Envoyer</button>
                    </form>
                    <div>
                        <h3>Restons connectés !</h3>
                        <p><strong>Passez faire un tour dans notre boutique ! Nous vos accueillons tous les jours de 9h à 19h.</strong><br></br><br></br>
                            Nous sommes là pour vous guider et vous conseiller dans le choix de votre plante.<br></br> 
                            Selon la saison et les différentes spécificités qui vous conviendront, nous vous recommanderont la meilleure plante qui correspond à votre profil et votre mode de vie. 
                        </p>
                        <p>Et sinon, achetez votre plante directement sur notre boutique en ligne, vous retrouvez un large choix de pante qui vous séduira.</p>
                        <button className="button">Voir nos plantes</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
        
    )
}

export default Contact