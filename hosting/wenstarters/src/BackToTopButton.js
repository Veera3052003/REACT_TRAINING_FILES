import React from 'react'
import {useEffect,useState} from "react";
import './BackToTopButton.css'

function BackToTopButton() {
    const [BackToTopButton,setBackToTopButton]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>60){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    },[])

    const scrollUp=()=>{
        window.scrollTo({
            top:50,
            behavior:"smooth"
        })
    }
  return (
    <div>
      {BackToTopButton&&(
        <button className='BackToTopButtonStyle' onClick={()=>{scrollUp()}}>^</button>
      )}
    </div>
  )
}

export default BackToTopButton
