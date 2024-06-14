import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'


function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    
      <form className='w-[90%]  flex flex-col p-8 bg-slate-200 text-sm gap-4 rounded-sm border border-green-200 md:w-[50%] lg:w-[30%]'>
        <div className=' flex flex-col gap-2'>
          <label htmlFor="name">Name: </label>
          <Input type={'text'} placeholder={'Username'}/>        
        </div>
        <div  className=' flex flex-col gap-2'>
          <label htmlFor="password">Password: </label>
          <Input type={'text'} placeholder={'Password'} /> 
        </div>
        <Button className='border-2 border-white' onClick={handleSubmit}>Submit</Button>
      </form>
    
  )
}

export default Login