import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Technology from './components/Technology'
import Footer from './components/Footer'
import Student from './components/Student'
import InfoBox from './components/InfoBox'
import Navigation from './components/Navigation'
import CourseCard from './components/CourseCard'
import StudentCard from './components/StudentCard'
import Book from './components/Book'
import Produkt from './components/Produkt'
import User from './components/user'

function App() {

  function showTechnology(name) {
    console.log("Wybrano: " + name);
  }

  function selectTechnology(name) {
    console.log("Wybrano: " + name);
  }
  function selectProduct(name) {
    console.log("Wybrano produkt: " + name);
  }
  function selectUser(name, role) {
    console.log("Użytkownik: " + name);
    console.log("Rola: " + role);
  }

  const technologies = [
    {
      id: 1,
      name: "App.jsx",
      category: "frontend",
      hours: 30
    },
    {
      id: 2,
      name: "Node.js",
      category: "backend",
      hours: 20
    },
    {
      id: 3,
      name: "MySQL",
      category: "baza",
      hours: 40
    },
    {
      id: 4,
      name: "Express",
      category: "Backend",
      hours: 25
    },
    {
      id: 5,
      name: "MongoDB",
      category: "Baza danych",
      hours: 20
    }
  ]


  return (
    <>
      <User
        name="Anna"
        role="Administrator"
        onFlow={selectUser}
      />
      <Produkt
        name="Laptop"
        price={3500}
        onSelect={selectProduct}
      />
      <Technology
        name="React"
        category="Frontend"
        hours={30}
        onFlow={selectTechnology}
      />
      <Technology
        name="MySQL"
        category="Baza"
        hours={20}
        onFlow={selectTechnology}
      />
      <Technology
        name="Java"
        category="Backend"
        hours={25}
        onFlow={selectTechnology}
      />
    </>
  )
}

export default App