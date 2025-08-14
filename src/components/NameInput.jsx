import React, { useState } from 'react'

const NameInput = () => {
    const [name, setName]=useState("")
  return (
    <>
    <hr className='my-8'/>
        <div className='p-4 text-center'>
            <input type="text" placeholder="Type here" className="input" onChange={(e)=>setName(e.target.value)}/>
            <p className='mt-5 border rounded-2xl w-80 mx-auto bg-blue-400 text-xl text-amber-50 py-0.5'>Hello, {name || "Guest"}!</p>
        </div>
    </>
  )
}

export default NameInput