import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom'
const Dashboard = React.lazy(()=> import('./components/Dashboard'))
const Landing = React.lazy(()=> import('./components/Landing'))

function App() {
 
  return (
    <div>

      <BrowserRouter>
          <AppBar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/landing" element={<Landing/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppBar(){
  const navigate = useNavigate(); 
  return(
    <div>
        <button onClick={()=>{
          navigate('/landing')
        }}> Home </button>

        <button onClick={()=>{
          navigate('/dashboard')
        }}> Dashboard </button>

    </div>
  )
}

export default App
