import React, { Suspense, createContext, useState } from 'react'
import './App.css'
import Count from './components/Count'
import Button from './components/Button'
// import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom'
// const Dashboard = React.lazy(()=> import('./components/Dashboard'))
// const Landing = React.lazy(()=> import('./components/Landing'))

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0)
  
 
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
        <Button />
      </CountContext.Provider>
      

      {/* <BrowserRouter>
          <AppBar />
          <Routes>
            <Route path="/dashboard" element={<Suspense fallback={'...loading'}>
              <Dashboard/> </Suspense> } />
            <Route path="/landing" element={<Suspense fallback={'...loading'}>
              <Landing/> </Suspense> } />
          </Routes>
      </BrowserRouter> */}
    </div>
  )
}


// function AppBar(){
//   const navigate = useNavigate(); 
//   return(
//     <div>
//         <button onClick={()=>{
//           navigate('/landing')
//         }}> Home </button>

//         <button onClick={()=>{
//           navigate('/dashboard')
//         }}> Dashboard </button>

//     </div>
//   )
// }

export default App
