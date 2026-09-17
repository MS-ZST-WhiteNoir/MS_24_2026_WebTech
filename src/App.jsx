import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  function Header(){
    return(
      <div>
        <h1>Header WebTech - MS</h1>
      </div>
    )
  }

  function Technology() {
    return (
      <div>
        <h2>React</h2>
        <p>Technologia frontendowa</p>
      </div>
    )
  }

  function Footer() {
    return (
      <div>
        <p>Projekt React</p>
      </div>
    )
  }

  return (
    <>
      <Header/>
        <Technology/>
      <Footer/>
    </>
  )
}

export default App
