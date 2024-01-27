import React from 'react'
import './header.css'

const Header = () => {
  return (

    <>
        <div className='bg-black text-xl flex justify-between px-4 h-3/4'>
            <img src={require('./Untitled (1).png')} alt="logo icon" className='w-10' />
            <nav>
                <ul className='flex gap-3 items-center justify-center text-white'>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="research">Research</a></li>
                    <li><a href="services">Services</a></li>
                    <li><a href="dashboard">Dashboard</a></li>
                </ul>
            </nav>
        </div>
    </>
    
  )
}

export default Header
