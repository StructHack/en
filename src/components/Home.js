import React, { useEffect } from 'react'
import '../styles/Home.css'


function Home() {
    useEffect(()=>{
        const loadingContainer = document.querySelector('.intro-container h1');
        const loadingElement = document.querySelector('.letter-animate')
        const imageProfile = document.querySelector('.image-container')
        loadingContainer.addEventListener('animationend',(event)=>{ 
            loadingElement.style.opacity=1;
            imageProfile.style.opacity=1;
        })
    },[])
  return (
    <div className="home-container">
        <div className='intro-container'>
            <h1>HELLO,</h1>
            <div className='letter-animate'>
                <p>I am Dipendra Shrestha.</p>
                <p>
                An electrical engineering student with interest in information security. I am interested in web security, browser security and reverse engineering.
                <br/>
                <i>I document my findings here.</i>
                </p>
            </div>
        </div>
        <div className='image-container'>
            <div className='image-profile'>
                <p>sthk@b0x</p>
                <p className='window-icons'>
                <i class="fa-solid fa-minus"></i>
                <i class="fa-brands fa-windows"></i>
                <i class="fa-solid fa-xmark"></i>
                </p>
            </div>
            <div className='terminal'>
                <p>sthk@LAPTOP-GOTTBBCM:~$<span> ls</span></p>
                <p className='output'>Games.txt</p>
            </div>
        </div>
    </div>
  )
}

export default Home