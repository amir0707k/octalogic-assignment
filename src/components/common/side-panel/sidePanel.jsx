import React from 'react';
import logo from '../../../assets/images/Logo.png';
import home from '../../../assets/images/home.png';
import courses from '../../../assets/images/courses.png';

function SidePanel() {
  return (
    <div className='h-full sm:w-24 md:bg-white pt-4'>
      <div className='flex justify-center'>
        <img src={logo} alt="" className='w-10 h-10'/>
      </div>
      <div className='mt-10 flex flex-col gap-4 p-2'>
        <img src={home} alt="" />
        <img src={courses} alt="" />
      </div>
      
    </div>
  )
}

export default SidePanel