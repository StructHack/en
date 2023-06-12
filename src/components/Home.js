import React, { useEffect } from 'react'
import '../styles/Home.css'
import Navigation from './Navigation';
import blob from '../images/profile.jpg'


function Home() {
    const etc = `root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin`
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
    <div className='whole'>
        <Navigation />
    <div className="home-container">
        <div className='intro-container'>
            <h1>HELLO,</h1>
            <div className='letter-animate'>
                <p>I am Dipendra Shrestha.</p>
                <p>
                An electrical engineering student with interest in information security. I am interested in web security and development, browser security and reverse engineering.
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
                <p className='output'>Games.txt profile.txt</p>
                <p>sthk@LAPTOP-GOTTBBCM:~$<span> cat /etc/passwd</span></p>
                <p className='output-profile'>
                    <pre>{etc}</pre>
                </p>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Home