import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (

    <>
        <div className='bg-black text-xl text-white px-8'>
          <div className='flex justify-between font-semibold py-5'>
            <img src={require('./Untitled (1).png')} alt="logo icon" className='w-8' />
              <nav>
                  <ul className='flex gap-6 items-center justify-center'>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="#profile">Profile</a></li>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="#courses">Courses</a></li>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="research">Research</a></li>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="services">Services</a></li>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="dashboard">Dashboard</a></li>
                  </ul>
              </nav>
          </div>

          <div className='flex py-10'>
            <h1 className='py-10 w-2/4 text-center font-extrabold text-6xl'>Learning new things everyday is <br />  the key to wisdom.</h1>  
            <img src={require('./gettyimages-1414982113.png')} alt="" className='w-2/4'/>     
          </div>
          <h2 className='text-center font-extrabold text-4xl my-8'>Profile</h2>
          <div className='flex justify-between'>
            <img src={require('./1-intro-photo-final.jpg')} alt="" className='w-2/4 rounded-tl-3xl'/>
            <div>
              <h3 className='text-center py-5 font-extrabold text-3xl'>About Me</h3>
              <p className='text-center px-6 text-3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fugiat, deserunt praesentium cupiditate necessitatibus eaque vitae iure, exercitationem libero doloribus quidem aperiam non. Quod animi eveniet, consequatur itaque provident deleniti!</p>
              <div className='flex gap-4 items-center my-8 text-2xl justify-center'>
                < FontAwesomeIcon icon={faEnvelope} />
                <p>email</p>
                < FontAwesomeIcon icon={faPhone} />
                <p>phone</p>
                < FontAwesomeIcon icon={faMapMarker} />
                <p>location</p>
              </div>
            </div>
          </div>
        </div>
          
    </>
    
  )
}

export default Header
