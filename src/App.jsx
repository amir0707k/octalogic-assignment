import { useContext, useState } from 'react'
import coursesContext from './context/CoursesContext'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Login from './components/login/Login'
import Courses from './components/courses/Courses'
import CoursesProvider from './context/CoursesProvider'
import MainPage from './components/main-page/mainPage'


function App() {
  const token = localStorage.getItem('token') || '';

  const {isLogin, setIsLogin} = useContext(coursesContext);
  setIsLogin(token ? true : false)


  return (
   
      <div className='bg-gray-100 flex p-0 flex-col w-[100vw] h-[100vh] justify-center items-center m-0'>
        {
          isLogin ? <MainPage/> : <Login setIsLogin={setIsLogin} />
        }
      </div>
   
  )
}

export default App
