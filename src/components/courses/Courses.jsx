import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import plus from '../../assets/images/plus.svg'

import coursesContext from "../../context/CoursesContext"
import * as DialogPrimitive from "@radix-ui/react-dialog"

import dots from '../../assets/images/dots.png'
import React, { useContext, useEffect, useState } from 'react'
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { generateRandomNum } from "@/functions/generateRandomNum";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function Courses() {

  const { courses, setCourses } = useContext(coursesContext);

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses))
  }, [courses])

  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [instrument, setInstrument] = useState("");
  const [day, setDay] = useState("");
  const [price, setPrice] = useState("");

  const handleAddCourse = () => {
    if (courseName.trim() == '' || description.trim() == '' || instructor.trim() == '' || instrument.trim() == '' || day.trim() == '' || price.trim() == '') {
      alert('All fields are required')
      return
    }
    const newCourse = {
      name: courseName,
      description,
      instructor,
      instrument,
      dayOfWeek: day,
      price,
      status: "Active",
      numberOfStudents: generateRandomNum(),
      action: {
        editCourse: true,
        closeCourse: true,
        archiveCourse: true
      }
    }

    setCourses([...courses, newCourse])
    setCourseName('');
    setDescription('');
    setInstructor('');
    setInstrument('');
    setDay('');
    setPrice('')
  }


  return (
    <div className="w-full h-full flex items-center p-10 flex-col gap-4 justify-between">
      <div className="flex flex-col w-full gap-4 text-gray-400">

        <div className="flex flex-col w-full gap-10 text-gray-400">
          <h1 className="self-start font-semibold text-3xl">Courses</h1>
          <div className="flex justify-between w-full">
            <p className="text-lg font-semibold ">COURSE LIST</p>
            <div className="flex bg-white px-2 py-1 rounded-md border items-center">
              <span class="material-symbols-outlined"  >
                search
              </span>
              <input type="text" placeholder="Search" className="pl-2 outline-none" />
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
                <TableCell className="text-right">
                  {course.status === 'Active' ? (
                    <Popover>
                      <PopoverTrigger>
                        <img src={dots} alt="options" />
                      </PopoverTrigger>
                      <PopoverContent className='w-fit flex flex-col gap-2'>
                        <p className='cursor-pointer hover:text-blue-500'>Edit Course</p>
                        <p className='cursor-pointer hover:text-blue-500'>Close Course</p>
                        <p className='cursor-pointer hover:text-blue-500'>Archive Course</p>
                      </PopoverContent>
                    </Popover>
                  ) : course.status === 'Closed' ? (
                    <div className='cursor-not-allowed pointer-events-none'>
                      <img src={dots} alt="options" className='opacity-50 ml-auto' />
                    </div>
                  ) : (
                    <Popover>
                      <PopoverTrigger>
                        <img src={dots} alt="options" />
                      </PopoverTrigger>
                      <PopoverContent className='w-fit flex flex-col gap-2'>
                       
                        <p className='cursor-pointer hover:text-blue-500'>Unarchive Course</p>
                      </PopoverContent>
                    </Popover>
                  )}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </div>
      <Dialog>
        <DialogTrigger className='self-end bg-[#ffbec8] p-4 text-black flex gap-2 items-center rounded-lg '><img src={plus} alt="" className="w-[12px]" /> <span className="font-semibold text-sm">Add Course</span></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <Input placeholder="Course Name" className='outline-none pl-2 text-sm' value={courseName} onChange={(e) => { setCourseName(e.target.value) }} />
            <Input placeholder="Description" className='outline-none pl-2 text-sm' value={description} onChange={(e) => { setDescription(e.target.value) }} />
            <Input placeholder="Instructor" className='outline-none pl-2 text-sm' value={instructor} onChange={(e) => { setInstructor(e.target.value) }} />
            <Input placeholder="Instrument" className='outline-none pl-2 text-sm' value={instrument} onChange={(e) => { setInstrument(e.target.value) }} />
            <Input placeholder="Day of the Week" className='outline-none pl-2 text-sm' value={day} onChange={(e) => { setDay(e.target.value) }} />
            <Input placeholder="Price" className='outline-none pl-2 text-sm' value={price} onChange={(e) => { setPrice(e.target.value) }} />

          </DialogHeader>
          <div className="flex justify-between items-center">
            <div>
            </div>
            <div className="flex justify-between items-center mt-4 gap-2">
              <DialogPrimitive.Close asChild>
                <Button className="h-10 w-20 bg-transparent text-black hover:text-white">
                  Cancel
                </Button>
              </DialogPrimitive.Close>
              <DialogPrimitive.Close asChild>
                <Button className="bg-[#ffbec8] p-3 text-black items-center rounded-lg text-sm hover:text-white"
                  onClick={handleAddCourse}  >
                  <span className="font-semibold text-sm">Add Course</span>
                </Button>
              </DialogPrimitive.Close>
            </div>

          </div>
        </DialogContent>

      </Dialog>
    </div>
  )
}

export default Courses