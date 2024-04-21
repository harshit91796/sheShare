import React from 'react'
import './footer.css'
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'

function Footer() {
  return (
    <div className="footer">
      <div className='footerText w-1/3'>
        <h1 className='text-3xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora et est repellat praesentium iusto mollitia possimus nostrum architecto vel quaerat!
        </h1>     
      
      </div>

      <div className='companyDiv '>
         <h1 className='text-5xl'>Company</h1>
         <h1>Terms and Conditions</h1>
         <h1>Privacy Policy</h1>
         <h1>Help</h1>
         <h1>FAQ's</h1>
      </div>
     
      <div className='about'>
      <h1 className='text-5xl'>About</h1>
          <h1>About</h1>
          <h1>Careers</h1>
          <h1>Blog</h1>
          <h1>contacts</h1>

      </div>

      <div className='mailDiv'>
          <h1 className='text-5xl'>Join our mailing list</h1>
          <div className='mail'>
          <input type="text" placeholder='Enter your email address' />
          <button className='mailButton'>Subscribe</button>
          </div>
          <div className='icons'>
              <Facebook />
              <Twitter  />
              <Instagram />
              <LinkedIn />

          </div>
      </div>

1    </div>
  )
}

export default Footer
