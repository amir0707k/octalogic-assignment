import React, { useContext } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import users_icon from '../../assets/images/users_icon.png'
import { generateEnrollmentData } from '../../functions/generateEnrollmentData'
import coursesContext from '@/context/CoursesContext';


const overviewDetails = [
    {
        description: 'total number of students',
        performance: 164
    },
    {
        description: 'total number of courses',
        performance: 12
    },
    {
        description: 'total amount earned',
        performance: '$2000'
    },
    {
        description: 'best performing course',
        performance: 'Guitar'
    },
    {
        description: 'worst performing course',
        performance: 'Flute'
    }
]

function Overview() {

  let {courses, setCourses} = useContext(coursesContext);
  courses=courses.slice(0,5)
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
    return (
        <div className="w-full h-full flex items-center pt-6 pl-10 flex-col gap-10 pr-10">
            <h1 className="self-start font-semibold text-3xl text-gray-500">Overview</h1>
            <div className='flex gap-4 text-sm flex-wrap lg:flex-row  justify-center'>

                {
                    overviewDetails.map((overview) => {
                        return <Card key={crypto.randomUUID()} className='flex lg:flex-col w-[45%] lg:w-fit'>
                            <CardHeader>
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <img src={users_icon} alt="" />
                                    </div>
                                    <div>
                                        <CardTitle className='text-left text-xl'>{overview.performance}</CardTitle>
                                        <CardDescription>{overview.description}</CardDescription>
                                    </div>
                                </div>

                            </CardHeader>
                            <CardFooter className='self-end text-[#b33187] text-sm'>
                                <p>View</p>
                            </CardFooter>
                        </Card>
                    })
                }


            </div>

            <div className='w-full'>
                <div className='flex justify-between mb-4'>
                    <h3>LATEST ENROLMENTS</h3>
                    <p  className='self-end text-[#b33187] text-sm'>View Courses</p>
                </div>
                <div className=' px-3 py-4 box-border rounded-md bg-white'>
                <Table>
                    

                    
                    <TableHeader className='w-full'>
                        <TableRow>
                            <TableHead className='text-left'>Enr. No</TableHead>
                            <TableHead >S. Name</TableHead>
                            <TableHead>C. Name</TableHead>
                            <TableHead>Fees</TableHead>
                            <TableHead  className="text-right">Enr. Date</TableHead>
                            
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {courses.map((course) => (
                            <TableRow key={crypto.randomUUID()}>
                                <TableCell className="font-medium text-left py-2">
                                    {course.enrollmentNumber}
                                </TableCell>
                                
                                <TableCell className="text-left">
                                    {course.instructor.length > 20 ? `${course.instructor.substring(0, 20)}...` : course.instructor}
                                </TableCell>
                                <TableCell className="text-left">
                                    {course.instrument.length > 10 ? `${course.instrument.substring(0, 10)}...` : course.instrument}
                                </TableCell>
                                
                                <TableCell className="text-left">{course.price}</TableCell>
                                <TableCell className="text-right">
                                    {course.enrollmentDate}

                                </TableCell>
                                {/* <TableCell className="text-right">{course.action}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                    
                </Table>
                </div>
                
            </div>
        </div>
    )
}

export default Overview