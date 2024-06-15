import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Login from './components/login/Login'
import Courses from './components/courses/Courses'
import CoursesProvider from './context/CoursesProvider'

function App() {
  const token = localStorage.getItem('token') || '';


  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false)


  return (
    <CoursesProvider>
      <div className='bg-gray-100 flex p-0 flex-col w-[100vw] h-[100vh] justify-center items-center '>
        {
          isLoggedIn ? <Courses /> : <Login setIsLoggedIn={setIsLoggedIn} />
        }


      </div>
    </CoursesProvider>
  )
}

export default App
