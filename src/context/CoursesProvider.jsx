

import React, { useState } from 'react'
import coursesContext from './CoursesContext'

function CoursesProvider({children}) {
   /* 
           {
        name: "Guitar Basics",
        description: "Learn the fundamentals of guitar playing.",
        instructor: "John Doe",
        instrument: "Guitar",
        dayOfWeek: "Monday",
        numberOfStudents: 15,
        price: 100,
        status: "Active",
        action: {
          editCourse: true,
          closeCourse: true,
          archiveCourse: true
        },
        enrollmentDate: "12-08-2023",
        enrollmentNumber: "1563124"
      }
        */


    const [courses, setCourses] = useState([
      {
        name: "Guitar Basics",
        description: "Learn the fundamentals of guitar playing.",
        instructor: "John Doe",
        instrument: "Guitar",
        dayOfWeek: "Monday",
        numberOfStudents: 15,
        price: 100,
        status: "Active",
        action: {
          editCourse: true,
          closeCourse: true,
          archiveCourse: true
        },
        enrollmentDate: "12-08-2023",
        enrollmentNumber: "1563124"
      },
      {
        name: "Advanced Piano",
        description: "Master advanced piano techniques.",
        instructor: "Jane Smith",
        instrument: "Piano",
        dayOfWeek: "Tuesday",
        numberOfStudents: 10,
        price: 200,
        status: "Closed",
        action: {
          editCourse: false,
          closeCourse: false,
          archiveCourse: false
        },
        enrollmentDate: "13-08-2023",
        enrollmentNumber: "2564125"
      },
      {
        name: "Violin for Beginners",
        description: "Introduction to playing the violin.",
        instructor: "Emily Johnson",
        instrument: "Violin",
        dayOfWeek: "Wednesday",
        numberOfStudents: 12,
        price: 120,
        status: "Archived",
        action: {
          unarchiveCourse: true
        },
        enrollmentDate: "14-08-2023",
        enrollmentNumber: "3565126"
      },
      {
        name: "Jazz Saxophone",
        description: "Explore jazz styles on the saxophone.",
        instructor: "Mike Brown",
        instrument: "Saxophone",
        dayOfWeek: "Thursday",
        numberOfStudents: 8,
        price: 180,
        status: "Active",
        action: {
          editCourse: true,
          closeCourse: true,
          archiveCourse: true
        },
        enrollmentDate: "15-08-2023",
        enrollmentNumber: "4566127"
      },
      {
        name: "Drumming 101",
        description: "Basics of drumming and rhythm.",
        instructor: "Chris Wilson",
        instrument: "Drums",
        dayOfWeek: "Friday",
        numberOfStudents: 20,
        price: 150,
        status: "Active",
        action: {
          editCourse: true,
          closeCourse: true,
          archiveCourse: true
        },
        enrollmentDate: "16-08-2023",
        enrollmentNumber: "5567128"
      },
      {
        name: "Flute Melodies",
        description: "Learn to play beautiful flute melodies.",
        instructor: "Sarah Davis",
        instrument: "Flute",
        dayOfWeek: "Saturday",
        numberOfStudents: 6,
        price: 110,
        status: "Archived",
        action: {
          unarchiveCourse: true
        },
        enrollmentDate: "17-08-2023",
        enrollmentNumber: "6568129"
      },
      {
        name: "Trumpet Techniques",
        description: "Advanced techniques for trumpet players.",
        instructor: "David Martinez",
        instrument: "Trumpet",
        dayOfWeek: "Sunday",
        numberOfStudents: 7,
        price: 170,
        status: "Closed",
        action: {
          editCourse: false,
          closeCourse: false,
          archiveCourse: false
        },
        enrollmentDate: "18-08-2023",
        enrollmentNumber: "7569130"
      },
      {
        name: "Cello Sessions",
        description: "Learn to play the cello.",
        instructor: "Laura Hernandez",
        instrument: "Cello",
        dayOfWeek: "Monday",
        numberOfStudents: 5,
        price: 190,
        status: "Active",
        action: {
          editCourse: true,
          closeCourse: true,
          archiveCourse: true
        },
        enrollmentDate: "19-08-2023",
        enrollmentNumber: "8560131"
      },
      {
        name: "Clarinet Classics",
        description: "Explore classic pieces on the clarinet.",
        instructor: "James White",
        instrument: "Clarinet",
        dayOfWeek: "Tuesday",
        numberOfStudents: 9,
        price: 130,
        status: "Archived",
        action: {
          unarchiveCourse: true
        },
        enrollmentDate: "20-08-2023",
        enrollmentNumber: "9561132"
      },
      {
        name: "Vocal Training",
        description: "Improve your vocal techniques.",
        instructor: "Olivia Green",
        instrument: "Voice",
        dayOfWeek: "Wednesday",
        numberOfStudents: 18,
        price: 160,
        status: "Closed",
        action: {
          editCourse: false,
          closeCourse: false,
          archiveCourse: false
        },
        enrollmentDate: "21-08-2023",
        enrollmentNumber: "10562133"
      }
    ]
    )
    
  return (
    <coursesContext.Provider value={{courses, setCourses}}>
        {children}


       
    </coursesContext.Provider>
  )
}

export default CoursesProvider