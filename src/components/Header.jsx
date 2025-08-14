import React from 'react'

const Header = ({title}) => {
  return (
    <header className='text-3xl bg-blue-500 p-4 text-center text-white'>{title}</header>
  )
}

export default Header