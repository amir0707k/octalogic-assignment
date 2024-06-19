import React, { useState } from 'react'
import SidePanel from '../common/side-panel/sidePanel'
import Courses from '../courses/Courses'
import Overview from '../overview/overview'

function MainPage() {
  
  const [view, setView] = useState("overview");


  return (
    <div className='flex w-full h-full p-0 m-0 box-border'>
        <SidePanel setView={setView}/>
        <div className='sm:ml-24 w-full sm:w-[calc(100%-6rem)]'>
          {
            view === 'overview' ? <Overview/> : <Courses/> 
          }
        </div>
    </div>
  )
}

export default MainPage