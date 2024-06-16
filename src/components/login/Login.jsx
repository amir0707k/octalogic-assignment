import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'
import { generateAccessToken } from '@/functions/generateToken'


function Login({setIsLogin}) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSubmit = (e) => {

    e.preventDefault();

    if(username.trim() === '' || password.trim() === ''){
      alert(`Username and Password field shouldn't be empty`)
      return
    }
    const token = localStorage.setItem('token',generateAccessToken())
    setIsLogin(true)
  }

  return (
    
      <form className='w-[90%] flex flex-col p-8 bg-slate-200 text-sm gap-4 rounded-sm border border-green-200 md:w-[50%] lg:w-[30%]'>
        <div className=' flex flex-col gap-2'>
          <label htmlFor="name">Name: </label>
          <Input className=' outline-none focus:outline-none' type={'text'} value={username} placeholder={'Username'} onChange={(e) => setUsername(e.target.value)}/>        
        </div>
        <div  className='flex flex-col gap-2 '>
          <label htmlFor="password">Password: </label>
          <Input className=' outline-none focus:outline-none' type={'text'} placeholder={'Password'}  value={password} onChange={(e) => setPassword(e.target.value)}/> 
        </div>
        <Button className='border-2 border-white' onClick={handleSubmit}>Submit</Button>
      </form>
    
  )
}

export default Login