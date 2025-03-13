
import Avantages from "./components/Avantages"
import Bestsellers from "./components/Bestsellers"
import Cta from "./components/Cta"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Plants from "./components/Plants"

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Bestsellers />
            <Avantages />
            <Plants />
            
            <Cta />
            <Footer />
        </div>
    )
}

export default App