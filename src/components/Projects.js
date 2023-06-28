import React, { useEffect } from 'react'
import '../styles/Projects.css'

function Projects() {


  return (
    <div className='project-container' id="projects">
       <div className='project-one'>
        <a href="https://github.com/structhack/assignments" target="_blank" rel="noreferrer">
          <div className='project-title'>
            <p>Not a twitter ~Chirper~</p>
            <p>Node with SQL and React Stack</p>
          </div>
          <div className='project-desc'>
            <img src="https://www.shutterstock.com/image-vector/pixel-art-astronaut-spaceman-8-600w-1984751615.jpg" />
          </div>
          </a>
       </div>
       <div className='project-one'>
        <a href="https://github.com/structhack/todolist" target="_blank" rel="noreferrer">
          <div className='project-title'>
            <p>TODO LIST</p>
            <p>MERN Stack</p>
          </div>
          <div className='project-desc'>
            <img src="https://www.shutterstock.com/image-vector/pixel-art-astronaut-spaceman-8-600w-1984751615.jpg" />
          </div>
          </a>
       </div>
       <div className='project-one'>
       <a href="https://github.com/structhack/todolist" target="_blank" rel="noreferrer">
       <div className='project-title'>
            <p>Messenger</p>
            <p>React</p>
          </div>
          <div className='project-desc'>
            <img src="https://d33wubrfki0l68.cloudfront.net/17ff1ddcd621d492f37a97486d7087319f6d6650/b0617/blog/pixels-please-image-scaling-css/images/mario-banner.png" />
          </div>
          </a>
       </div>
       <div className='project-one'>
       <a href="https://github.com/StructHack/frmentor_challenges" target="_blank" rel="noreferrer">
       <div className='project-title'>
            <p>Front-end Mentor</p>
            <p>HTML+CSS</p>
          </div>
          <div className='project-desc'>
            <img src="https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg" />
          </div>
          </a>
       </div>
       <div className='project-one'>
       <a href="https://github.com/StructHack/hackbar" target="_blank" rel="noreferrer">
       <div className='project-title'>
            <p>HackBar</p>
            <p>Chrome extension</p>
          </div>
          <div className='project-desc'>
            <img src="https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg" />
          </div>
          </a>
       </div>
       <div className='project-one'>
       <a href="https://github.com/StructHack/Project-Websites" target="_blank" rel="noreferrer">
       <div className='project-title'>
            <p>WebSites</p>
            <p>HTML+CSS+JS</p>
          </div>
          <div className='project-desc'>
            <img src="https://as2.ftcdn.net/v2/jpg/05/37/28/29/1000_F_537282968_YjJO0AWtY1tRfT1O7wOi2JKTYMdUAnYE.jpg" />
          </div>
          </a>
       </div>
       <div className='project-one'>
       <a href="https://github.com/StructHack/PCO" target="_blank" rel="noreferrer">
       <div className='project-title'>
            <p>PCO</p>
            <p>Python+MATLAB</p>
          </div>
          <div className='project-desc'>
            <img src="https://as1.ftcdn.net/v2/jpg/04/53/92/04/1000_F_453920448_yMcff4E8ctdXQQegdaQ7WcXnHM3y3aMM.jpg" />
          </div>
          </a>
       </div>
    </div>
  )
}

export default Projects