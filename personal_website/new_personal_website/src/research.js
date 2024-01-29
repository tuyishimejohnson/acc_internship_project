import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Research = () => {
  return (
    <>
        <div className='bg-black text-white text-xl px-8'>
        <div className='flex justify-between font-semibold py-5'>
            <img src={require('./Untitled (1).png')} alt="logo icon" className='w-8' />
              <nav>
                  <ul className='flex gap-6 items-center justify-center'>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="#profile">Profile</a></li>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="#courses">Courses<FontAwesomeIcon icon={faCaretDown} className='px-2 items-center'/></a></li>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="research">Research<FontAwesomeIcon icon={faCaretDown} className='px-2 items-center'/></a></li>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="services">Services<FontAwesomeIcon icon={faCaretDown} className='px-2 items-center'/></a></li>
                      <li className="hover:bg-slate-400 rounded-sm"><a href="dashboard">Dashboard</a></li>
                  </ul>
              </nav>
          </div>
        <h2 className='font-extrabold text-4xl py-20 text-center'>Researches</h2>
        <div className='flex gap-7'>
            <div>
                <h3 className='font-extrabold text-2xl my-4 text-center'>Research1</h3>
                <img src={require('./L2u9aY5uuAOp1STLEzjhy3ttStLVC00wR7cpxesT.jpg')} alt="" className='rounded-2xl'/>
                <p className='text-center border-2 rounded'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo hic esse natus corporis iure officia qui quo vel accusamus numquam perspiciatis eos repudiandae deserunt adipisci, similique officiis modi impedit quis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illo dolorem similique quia magnam modi, ad ipsum. Illo, nemo modi? Aspernatur inventore eos laudantium ratione quod nesciunt enim vel esse!</p>
                <div className='flex items-center justify-center'>
                    <button className='px-6 py-4 border'>Read more</button>
                </div>
                
            </div>
            <div>
                <h3 className='font-extrabold text-2xl my-4 text-center'>Research2</h3>
                <img src={require('./L2u9aY5uuAOp1STLEzjhy3ttStLVC00wR7cpxesT.jpg')} alt="" className='rounded-2xl'/>
                <p className='text-center border-2 rounded'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo hic esse natus corporis iure officia qui quo vel accusamus numquam perspiciatis eos repudiandae deserunt adipisci, similique officiis modi impedit quis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illo dolorem similique quia magnam modi, ad ipsum. Illo, nemo modi? Aspernatur inventore eos laudantium ratione quod nesciunt enim vel esse!</p>
                <div className='flex items-center justify-center'>
                    <button className='px-6 py-4 border'>Read more</button>
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
                  <button type="submit" className='px-4 py-3 rounded-sm block w-2/4 justify-center border hover:bg-gray-500 text-white'>Send message</button>
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

export default Research