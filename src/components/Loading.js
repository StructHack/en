import React,{useEffect} from 'react'
import '../styles/Loading.css'

function Loading({loaded, setLoaded}) {
    useEffect(()=>{
        const loadingContainer = document.querySelector('.loading-container');
        const loadingElement = document.querySelector('.loading-runner');
        loadingElement.addEventListener('animationend',(event)=>{
            loadingContainer.style.overflow = 'hidden';
            setLoaded(!loaded)
        })
    },[])
  return (
    <div className='loading-container'>
        <h2>Loading ...</h2>
        <div className='loading-bar'>
            <span className='loading-runner'></span>
        </div>
    </div>
  )
}

export default Loading