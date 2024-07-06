
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AddProducts from './components/AddProducts'
import HomePage from './components/HomePage'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path={'/'}element={<HomePage/>}>HomePage</Route>
      <Route path={'/add'}element={<AddProducts/>}>AddProducts</Route>
    </Routes>
    </>
  )
}

export default App
