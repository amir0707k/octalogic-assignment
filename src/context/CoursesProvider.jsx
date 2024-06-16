

import React, { useState } from 'react'
import coursesContext from './CoursesContext'

function CoursesProvider({children}) {
    
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
      }
    ])
    
  return (
    <coursesContext.Provider value={{courses, setCourses}}>
        {children}
    </coursesContext.Provider>
  )
}

export default CoursesProvider