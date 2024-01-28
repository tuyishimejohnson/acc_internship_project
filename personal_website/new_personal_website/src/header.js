import React from 'react'
import './header.css'

const Header = () => {
  return (

    <>
        <div className='bg-black text-xl'>
          <div className='flex justify-between px-6 font-semibold py-5'>
            <img src={require('./Untitled (1).png')} alt="logo icon" className='w-8' />
              <nav>
                  <ul className='flex gap-6 items-center justify-center text-white'>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="#profile">Profile</a></li>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="#courses">Courses</a></li>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="research">Research</a></li>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="services">Services</a></li>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="dashboard">Dashboard</a></li>
                  </ul>
              </nav>
          </div>

          <div className='flex py-10'>
            <h1 className='text-white py-10 w-2/4 text-center font-extrabold text-6xl'>Learning new things everyday is <br />  the key to wisdom.</h1>  

            <img src={require('./gettyimages-1414982113.png')} alt="" className='w-2/4 px-7'/>     
          </div>
        </div>
          
    </>
    
  )
}

export default Header
