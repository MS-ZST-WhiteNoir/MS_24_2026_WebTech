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

function App() {

  function showTechnology(name) {
    console.log("Wybrano: " + name);
  }

  const numbers = [1, 2, 3, 4, 5];
  const auta = [
    {id: 1, brand: "Toyota", model: "Corolla"},
    {id: 2, brand: "Honda", model: "Civic"},
    {id: 3, brand: "Ford", model: "Focus"}
  ]
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
  const students = [
  { id: 1, name: "Anna", className: "4P", age: 17, specialization: "Graphic" },
  { id: 2, name: "Jan", className: "4P", age: 18, specialization: "Design" },
  { id: 3, name: "Adam", className: "4P", age: 17, specialization: "Code" },
  { id: 4, name: "Marek", className: "4P", age: 19, specialization: "Design" }
  ];
  const books = [
{ id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
{ id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
{ id: 3, title: "Lalka", author: "Bolesław Prus" }
]

  return (
    <>
      <button onClick={() => showTechnology("React")}>
        Pokaż technologię
      </button>
        <h2>Technologie</h2>
        {technologies.map((technology) => (
          <Technology
            key={technology.id}
            name={technology.name}
            category={technology.category}
            hours={technology.hours}
          />
        ))}
      <h2>Students</h2>
      {students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            className={student.className}
            age={student.age}
            specialization={student.specialization}
          />
        )
        
      })}

      <h2>Książki</h2>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <h2>Książki</h2>
      {books.map((book) => {
        return (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />
      )})}
    </>
  )
}

export default App