import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Login from './components/login/Login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className='bg-gray-100 flex p-0 flex-col w-[100vw] h-[100vh] justify-center items-center '>
      {
        isLoggedIn ? "" : <Login setIsLoggedIn= {setIsLoggedIn}/>
      }
      
    
    </div>
  )
}

export default App
