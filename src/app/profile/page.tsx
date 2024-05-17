'use client';
import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function ProfilePage() {
  const router = useRouter()
  const [data,setData] = useState("nothing")

  const getUserDetails = async()=>{
    const res= await axios.post("/api/users/me")
    console.log(res.data.data._id);
    setData(res.data.data._id)
  }

  const logout = async() =>{
    try {
      await axios.get("/api/users/logout")
      toast.success("logout successful")
      router.push("/login")
    } catch (error:any) {
        console.log(error.message)
        toast.error(error.message)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center  h-auto py-2">
            <h1 className='text-2xl mb-4 mt-4 font-bold'>Profile Page</h1>
            <hr />
            <h2 className="p-1 mb-2 rounded bg-green-500">{data === 'Nothing' ? "" : <Link href={`/profile/${data}`}>{data}
            </Link>}</h2>
        <hr />
        <button
        onClick={logout}
        className="bg-blue-500 mt-4 mb-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Logout</button>
        <button
        onClick={getUserDetails}
        className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >GetUser Details</button>
</div>
  )
}

