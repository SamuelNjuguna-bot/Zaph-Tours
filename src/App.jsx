
import './App.css'
import Header from './componets/Header/Header'
import Home from './pages/Home'
import Trip from './pages/trip'
import Contact from './pages/contact'
import Destinaton from './pages/destination'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    
    <>
    <Header/>  
    <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/destination' element={<Destinaton/>}>Destination</Route>
      <Route path='/trip' element={<Trip/>}>Trip</Route>
      <Route path='/contact' element={<Contact/>}>Contact</Route>
    </Routes>
  

    </>
  )
}

export default App
