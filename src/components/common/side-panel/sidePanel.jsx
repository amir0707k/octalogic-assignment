import React, { useContext } from 'react';
import logo from '../../../assets/images/Logo.png';
import home from '../../../assets/images/home.png';
import courses from '../../../assets/images/courses.png';
import logout from '../../../assets/images/logout.png'
import coursesContext from '@/context/CoursesContext';

function SidePanel({setView}) {

  const {setIsLogin} = useContext(coursesContext)

  const handleLogout = () => {
    
    localStorage.removeItem('token')
    localStorage.removeItem('courses')
    setIsLogin(false)
  }


  return (
    <div className='h-full sm:w-24 md:bg-white pt-4 fixed flex flex-col justify-between'>
      <div>

      
      <div className='flex justify-center'>
        <img src={logo} alt="" className='w-10 h-10'/>
      </div>
      <div className='mt-10 flex flex-col gap-4 p-2'>
        <img src={home} alt="" onClick={() => setView('overview')}/>
        <img src={courses} alt=""  onClick={() => setView('courses')}/>
      </div>
      </div>
      
        <img src={logout} alt="" className='p-2 mb-3' onClick={handleLogout}/>
     
    </div>
  )
}

export default SidePanel