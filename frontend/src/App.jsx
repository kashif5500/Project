import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>

  <Navbar/>

  <AppRoutes/>
    </div>
  )
}

export default App
