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

function App() {

const specifications = {
  language: "JavaScript",
  type: "Frontend"
}
const features = [
  "Komponenty",
  "JSX",
  "Props"
]
const studentOne = {
id: 1,
firstName: "Jan",
lastName: "Kowalski",
className: "4P",
specialization: "technik programista",
gradesAverage: 4.75,
isActive: true
};

  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      asdasd
      {
        numbers.map((number) => {
          return (<p>{number}</p>)
        })
      }
    </>
  )
}

export default App
