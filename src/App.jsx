
import { useEffect } from 'react'
import './App.css'
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Header from './Components/header/Header'
import Home from './Components/home/Home'
import Projects from './Components/projects/Projects'
import Skills from './Components/skills/Skills'

function App() {

  return (
    <>
    
      <Header/>
      <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      </main>
      <Footer/>

    </>
  )
}

export default App
