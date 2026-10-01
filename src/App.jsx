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


  return (
    <>
      <Header/>
      <StudentCard student={studentOne}/>
      <Technology name="React" category="frontend" hours = {150} 
      specyfikacja = {specifications} features={features}/>
      <Technology name="PHP" category="backend" hours = {140}
      specyfikacja = {specifications} features={features}/>
      <Technology name="JavaScript" category="frontend" hours = {120}
      specyfikacja = {specifications} features={features}/>
      <Technology name="Angular" category="frontend" hours = {110}
      specyfikacja = {specifications} features={features}/>
      <Technology name="Mysql" category="backend" hours = {130}
        specyfikacja={specifications} features={features} />
      <Technology/>
    </>
  )
}

export default App
