import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import './App.css'
import AddDoctor from './components/AddDoctor'
import ViewDetails from './components/ViewDetails'
import EditDoctor from './components/EditDoctor'

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<LandingPage/>}>
                  
                  <Route index element={<Home/>}/>
                  <Route path='addDoctor' element={<AddDoctor/>}/>
                  <Route path='viewDetails/:id' element={<ViewDetails/>}/>
                  <Route path='editDoctor/:id' element={<EditDoctor/>}/>

              </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
