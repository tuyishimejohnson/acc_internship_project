import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

const Courses = () => {
  return (
    <>
      <div className='bg-black text-white text-xl px-8'>
            <div className='flex justify-between font-semibold py-5'>
                <img src={require('./Untitled (1).png')} alt="logo icon" className='w-12' />
                  <nav>
                      <ul className='flex gap-6 items-center justify-center'>
                          <li className="hover:bg-slate-400 rounded-sm"><a href="#profile">Profile</a></li>
                          <li className="hover:bg-slate-400 rounded-sm"><a href="#courses">Courses<FontAwesomeIcon icon={faCaretDown} className='px-2 items-center'/></a></li>
                          <li className="hover:bg-slate-400 rounded-sm"><a href="research">Research<FontAwesomeIcon icon={faCaretDown} className='px-2 items-center'/></a></li>
                          <li className="hover:bg-slate-400 rounded-sm"><a href="services">Services<FontAwesomeIcon icon={faCaretDown} className='px-2 items-center'/></a></li>
                          <li className="hover:bg-slate-400 rounded-sm"><a href="dashboard">Dashboard</a></li>
                      </ul>
                  </nav>
                  <div>
                        <button className='bg-blue-600 px-3 py-2 rounded hover:bg-blue-500'>Login</button>
                        <button className='bg-gray-600 px-3 py-2 rounded hover:bg-gray-500'>Sign Up</button>
                    </div>
              </div>
                    <div className='flex justify-between mt-32 mb-5'>
                        <h2 className='font-extrabold text-4xl w-1/4 text-center'>Courses</h2>
                        <form action="">
                            <input type="text" name="search" id="search" placeholder='Search courses'className='px-2 text-black'/>
                            <button type='submit'><FontAwesomeIcon icon={faSearch} className='mx-3'/></button>
                        </form>
                    </div>

                <div className=''>
                    <div className='flex'>
                        <img src={require('./Manufacturing-tech-Jan-18-2023-web.png')} alt="" className='w-2/4 h-auto rounded-tl-lg rounded-bl-lg'/>
                        <div className='bg-gray-700 py-7 px-5 rounded'>
                            <h3 className='text-2xl font-bold text-center'>Course one Title</h3>
                            <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis nisi, quas, consectetur neque debitis, qui exercitationem at harum saepe ullam possimus dolorem reprehenderit a ipsam nam ea repellat dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos, aperiam voluptatum placeat eius facilis! Praesentium, cumque consequuntur a, obcaecati recusandae earum deserunt eaque, facere eum repellendus pariatur inventore dignissimos.</p>
                            <button className='font-thin hover:text-gray-400'><FontAwesomeIcon icon={faLongArrowRight} className='px-4'/>Learn more</button>
                        </div>
                        
                    </div>
                    <div className='flex my-8'>
                        <img src={require('./Manufacturing-tech-Jan-18-2023-web.png')} alt="" className='w-2/4 rounded-tl-lg rounded-bl-lg'/>
                        <div className='bg-gray-700 py-7 px-5 rounded'>
                            <h3 className='text-2xl font-bold text-center'>Course two Title</h3>
                            <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis nisi, quas, consectetur neque debitis, qui exercitationem at harum saepe ullam possimus dolorem reprehenderit a ipsam nam ea repellat dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos, aperiam voluptatum placeat eius facilis! Praesentium, cumque consequuntur a, obcaecati recusandae earum deserunt eaque, facere eum repellendus pariatur inventore dignissimos.</p>
                            <button className='font-thin hover:text-gray-400'><FontAwesomeIcon icon={faLongArrowRight} className='px-4'/>Learn more</button>
                        </div>
                        
                    </div>
                    <div className='flex'>
                        <img src={require('./Manufacturing-tech-Jan-18-2023-web.png')} alt="" className='w-2/4 rounded-tl-lg rounded-bl-lg'/>
                        <div className='bg-gray-700 py-7 px-5 rounded'>
                            <h3 className='text-2xl font-bold text-center'>Course three Title</h3>
                            <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis nisi, quas, consectetur neque debitis, qui exercitationem at harum saepe ullam possimus dolorem reprehenderit a ipsam nam ea repellat dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos, aperiam voluptatum placeat eius facilis! Praesentium, cumque consequuntur a, obcaecati recusandae earum deserunt eaque, facere eum repellendus pariatur inventore dignissimos.</p>
                            <button className='font-thin hover:text-gray-400'><FontAwesomeIcon icon={faLongArrowRight} className='px-4'/>Learn more</button>
                        </div>
                    </div>
                    <div className='text-center mt-8'>
                        <button className='border rounded px-5 py-4 hover:text-black hover:bg-white'>Explore more courses</button>
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
                        <button type="submit" className='px-4 py-3 rounded-sm block w-2/4 justify-center border hover:bg-white hover:text-gray-500'>Send message</button>
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

export default Courses
