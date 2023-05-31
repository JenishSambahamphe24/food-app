import './App.css'
import Home from "./Components/Home";
import Navbar from "./Components/Navbar"
import Lunch from './Components/Lunch'
import Breakfast from './Components/Breakfast';
import Shake from './Components/Shake';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/lunch' element={<Lunch/>}/>
          <Route path='/breakfast' element={<Breakfast/>}/>
          <Route path='/shakes' element={<Shake/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
