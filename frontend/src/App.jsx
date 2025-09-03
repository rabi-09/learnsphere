import './App.css'
import { Cards } from './sections/Cards'
import Faq from './sections/Faq'
import { Features } from './sections/Features'
import { FinalCTA } from './sections/FinalCTA'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import { HeroBottom } from './sections/HeroBottom'
import { Navigation } from './sections/Navigation'
import Services from './sections/Services'

function App() {
  return (
    <>
    <Navigation />
    <Hero/>
    <HeroBottom />
    <Features/>
    <Services/>
    <Cards/>
    <FinalCTA/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default App
