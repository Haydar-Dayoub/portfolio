
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProjectDetails from './pages/ProjectDetails'
import Rentup from './pages/Rentup'
import FurniturePage from './pages/FurniturePage'
import SkiPage from './pages/SkiPage'
import FloraPage from './pages/FloraPage'
import TravelPage from './pages/TravelPage'
import EduPage from './pages/EduPage'







function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/sales/' element={<ProjectDetails/>}/>
      <Route path='/rent-up/' element={<Rentup/>}/>
      <Route path='/furniture/' element={<FurniturePage/>}/>
      <Route path='/ski/' element={<SkiPage/>}/>
      <Route path='/flora/' element={<FloraPage/>}/>
      <Route path='/travel/' element={<TravelPage/>}/>
      <Route path='/edu/' element={<EduPage/>}/>
      <Route/>
    </Routes>
    


    </>
  )
}

export default App
