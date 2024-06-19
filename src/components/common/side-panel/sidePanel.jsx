import React, { useContext } from 'react';
import logo from '../../../assets/images/Logo.png';
import home from '../../../assets/images/home.png';
import courses from '../../../assets/images/courses.png';
import logout from '../../../assets/images/logout.png'
import coursesContext from '@/context/CoursesContext';

function SidePanel({ setView }) {

  const { setIsLogin } = useContext(coursesContext)

  const handleLogout = () => {

    localStorage.removeItem('token')
    localStorage.removeItem('courses')
    setIsLogin(false)
  }


  return (
    <div className='w-full h-20 bg-white sm:pt-4 fixed flex flex-row justify-between sm:w-24 sm:h-full  sm:flex-col px-5 sm:px-0'>
      <div className=' flex items-center sm:block gap-2 sm:gap-0'>
        <div className='flex justify-center '>
          <img src={logo} alt="" className='w-10 h-10' />
        </div>
        <div className='flex gap-4 sm:p-2 sm:mt-10 sm:flex-col '>
          <img src={home} alt="" onClick={() => setView('overview')}/>
          <img src={courses} alt="" onClick={() => setView('courses')} />
        </div>
      </div>

      <img src={logout} alt="" className='py-4 sm:mb-3' onClick={handleLogout}  />

    </div>
  )
}

export default SidePanel