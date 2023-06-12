import React from 'react'
import '../styles/Contacts.css'


function Contacts() {
  return (
    <div className='contact-container' id="contacts">
        <h2>Contact</h2>
        <div className='contact-box'>
          <a href="https://twitter.com/structhack">
          <i class="fa-brands fa-twitter"></i>
          Twitter
        </a>
        <a href="https://github.com/structhack"><i class="fa-brands fa-github"></i>Github</a>
        <a href="https://www.linkedin.com/in/sthadipendra/"><i class="fa-brands fa-linkedin-in"></i>LinkedIn</a>
        <a href="https://www.instagram.com/_dipendra_shrestha/"><i class="fa-brands fa-instagram"></i>Instagram</a>
        </div>
        {/* <div className='footer'>
        Made By Dipendra Shrestha
        </div> */}
    </div>
  )
}

export default Contacts