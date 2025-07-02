import './App.css'
import Navbar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Carriere from './components/Carriere'
import Palmares from './components/Palmares'

function App() {
    return (
        <>
            <div className="bg-[url('/assets/cristiano1-phone.webp')] md:bg-[url('/assets/faceLeft.jpg')] w-full min-h-screen bg-no-repeat bg-cover bg-fixed">                    
                <Navbar/>
                <HeroSection/>
                <div className="bg-[url('/assets/cristiano-2.jpg')] md:bg-[url('/assets/Juventus.png')] h-screen bg-cover bg-center"/>
                <Carriere/>
                <Palmares/>
            </div>
        </>
    )
}

export default App
