import React from 'react'

const UserCard = ({name, age, profession, location}) => {
  return (
    <>
        <div className='border p-4 rounded shadow my-2 mx-3'>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Profession: {profession}</p>
            <p>Location: {location}</p>
        </div>
    </>
  )
}

export default UserCard