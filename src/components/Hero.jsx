import React from 'react'
import { logo, mind } from "../assets";


const Hero = () => {
  return (
    <header className="w-full flex 
    justify-center items-center flex-col">
      
      <nav className='flex justify-between
      items-center w-full flex-row mb-10 pt-3'>

        <img src={mind} alt="sumz_logo"
        className='w-28 object-contain' /> 
        <div className='w-28 object-contain'>Qintelligence</div>
        <button onClick = {() => window.open('https://github.com/qindavis')} 
          className='black_btn'>
           GitHub   
        </button>
      </nav>

      <h1 className='head_text'> Summarize Articles with <br 
      className='max-md:hidden'/>
       <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>

      <h2 className='desc'>
        Use this article summarizer, an open-source article summarizer
        that simplifies long articles into clear and concise summaries
      </h2>



    </header>
    
  )
}

export default Hero 