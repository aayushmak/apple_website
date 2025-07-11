import Navbar from "./components/Navbar"
import Highlights from "./components/Highlights"
import Hero from "./components/Hero"
import Model from "./components/Model"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  )
}

export default App

