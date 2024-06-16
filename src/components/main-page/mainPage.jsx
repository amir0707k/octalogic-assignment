import React from 'react'
import SidePanel from '../common/side-panel/sidePanel'
import Courses from '../courses/Courses'
import Overview from '../overview/overview'

function MainPage() {
  return (
    <div className='flex w-full h-full p-0 m-0 box-border'>
        <SidePanel/>
        {/* <Courses/> */}
        <Overview/>
    </div>
  )
}

export default MainPage