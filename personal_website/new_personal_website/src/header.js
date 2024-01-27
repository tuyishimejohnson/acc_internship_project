import React from 'react'
import './header.css'

const Header = () => {
  return (

    <>
        <div className='bg-black text-xl flex justify-between px-34 font-poppins font-semibold'>
            <img src={require('./Untitled (1).png')} alt="logo icon" className='w-8' />
            <nav>
                <ul className='flex gap-3 items-center justify-center text-white'>
                    <li className="hover:bg-slate-400 px-3 rounded-sm"><a href="#profile">Profile</a></li>
                    <li className="hover:bg-slate-400 px-3 rounded-sm"><a href="#courses">Courses</a></li>
                    <li className="hover:bg-slate-400 px-3 rounded-sm"><a href="research">Research</a></li>
                    <li className="hover:bg-slate-400 px-3 rounded-sm"><a href="services">Services</a></li>
                    <li className="hover:bg-slate-400 px-3 rounded-sm"><a href="dashboard">Dashboard</a></li>
                </ul>
            </nav>
        </div>
    </>
    
  )
}

export default Header
