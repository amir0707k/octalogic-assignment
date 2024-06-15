import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import coursesContext from "../../context/CoursesContext"


import React, { useContext } from 'react'


// name, description, instructor, instrument, day of week, #ofstudents, price, status, action
function Courses() {

  const courses = useContext(coursesContext);


  return (
    <div className="w-full h-full flex items-center p-10 flex-col gap-4">
      <div className="flex flex-col w-full gap-10 text-gray-400">
        <h1 className="self-start font-semibold text-3xl">Courses</h1>
        <div  className="flex justify-between w-full">
          <p className="text-lg font-semibold ">COURSE LIST</p>
          <div  className="flex bg-white px-2 py-1 rounded-md border items-center">
            <span class="material-symbols-outlined" >
              search
            </span>
            <input type="text" placeholder="Search" className="pl-4"/>
          </div>
        </div>
      </div>

      <Table className='rounded-sm bg-white'>
        
        <TableHeader>
          <TableRow>
            <TableHead >Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Instrument</TableHead>
            <TableHead>Day of week</TableHead>
            <TableHead># of students</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {courses.map((course) => (
            <TableRow key={crypto.randomUUID()}>
              <TableCell className="font-medium text-left py-2">
                {course.name.length > 20 ? `${course.name.substring(0, 20)}...` : course.name}
              </TableCell>
              <TableCell className="text-left">
                {course.description.length > 20 ? `${course.description.substring(0, 20)}...` : course.description}
              </TableCell>
              <TableCell className="text-left">
                {course.instructor.length > 20 ? `${course.instructor.substring(0, 20)}...` : course.instructor}
              </TableCell>
              <TableCell className="text-left">
                {course.instrument.length > 10 ? `${course.instrument.substring(0, 10)}...` : course.instrument}
              </TableCell>
              <TableCell className="font-medium text-left">
                {course.dayOfWeek.length > 10 ? `${course.dayOfWeek.substring(0, 10)}...` : course.dayOfWeek}
              </TableCell>
              <TableCell className="text-left">{course.numberOfStudents}</TableCell>
              <TableCell className="text-left">{course.price}</TableCell>
              <TableCell >
                <p className={`text-left ${course.status === 'Active' ? 'bg-green-200' : course.status === 'Closed' ? 'bg-red-200' : 'bg-gray-200'} rounded-md text-center px-3 text-gray-400 text-[12px] py-1`}>{course.status}</p>

              </TableCell>
              {/* <TableCell className="text-right">{course.action}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </div>
  )
}

export default Courses