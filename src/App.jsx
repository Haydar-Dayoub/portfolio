
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import EduPage from './pages/EduPage'










function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/edu/:id' element={<EduPage/>}/>


    </Routes>
    


    </>
  )
}

export default App
