import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
        <div className='bg-black text-xl text-white px-8 scroll-smooth'>
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
            <h1 className='py-10 w-2/4 text-center font-extrabold text-6xl'>Learning new things everyday is <br />  the key to wisdom. Please LEARN</h1>  
            <img src={require('./gettyimages-1414982113.png')} alt="" className='w-2/4'/>     
          </div>
          <h2 id='profile' className='w-2/4 text-center font-extrabold text-4xl my-8'>Profile</h2>
          <div className='flex justify-between'>
            <img src={require('./1-intro-photo-final.jpg')} alt="" className='w-2/4 rounded-e-full'/>
            <div>
              <h3 className='text-center py-5 font-extrabold text-3xl'>About Me</h3>
              <p className='text-center px-6 text-3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fugiat, deserunt praesentium cupiditate necessitatibus eaque vitae iure, exercitationem libero doloribus quidem aperiam non. Quod animi eveniet, consequatur itaque provident deleniti!</p>
              <div className='flex gap-4 items-center my-8 text-sm justify-center'>
                < FontAwesomeIcon icon={faEnvelope} />
                <p>sample@gmail.com</p>
                < FontAwesomeIcon icon={faPhone} />
                <p>+25076888888</p>
                < FontAwesomeIcon icon={faMapMarker} />
                <p>Kg 38 St Kigali, Rwanda</p>
              </div>
            </div>
          </div>
          <h2 className='font-extrabold text-3xl w-2/4 text-center my-9'>Contact me</h2>
          <footer className='bg-slate-800 flex justify-between px-7 py-8'>
            <form action="">
              <fieldset>
                <div>
                  <div className='block mb-3'>
                    <label htmlFor="name">Names</label>
                    <input type="text" id='name' placeholder='Your names' className='w-full text-gray-600'/>
                  </div>
                  
                  <div className='block mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Your email' className='w-full text-gray-600'/>
                  </div>

                  <div className='block mb-3'>
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Your message' className='w-full text-gray-600'></textarea>
                  </div>
                  <button type="submit" className='px-4 py-3 rounded-sm border hover:bg-white text-white'>Send message</button>
                </div>
              </fieldset>
            </form>
            <div className='w-2/4'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5535042083015!2d30.150342673212172!3d-1.9306257366661421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca77688d3131f%3A0x3a65f6d29a33c0d3!2sAfrican%20Leadership%20University!5e0!3m2!1sen!2srw!4v1706448678609!5m2!1sen!2srw" 
                title='googleMaps'
                width="600" 
                height="450" 
                style={{border:0}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade" 
                frameborder="0"></iframe>
            </div>
          </footer>
        </div>

        <div className='bg-slate-700 py-8'>
              <nav>
                <ul className='flex justify-center gap-5 text-center text-white'>
                  <li className='hover:text-gray-400'><a href="#profile">Profile</a></li>
                  <li className='hover:text-gray-400'><a href="#courses">Courses</a></li>
                  <li className='hover:text-gray-400'><a href="#research">Research</a></li>
                  <li className='hover:text-gray-400'><a href="#services">Services</a></li>
                  <li className='hover:text-gray-400'><a href="#dashboard">Dashboard</a></li>
                </ul>
              </nav>
          </div>  
    </>
  )
}

export default Header
