import React from 'react'
import "./Info3.css"
const Hero4 = () => {
  return (
    <div className='hero4'>
        <div className='content'>
        <p>iletişim ve ayrıntılı bilgi için lütfen arayın</p>
        <p>Selahattin Aksoy</p>
        <p> <a href='tel:+905355555555'>+90 552 080 7450</a></p>
        <img src={require('./images/aboutme.jpeg')} alt='aboutme.jpeg' height={700} width={400}/>
    </div>
    </div>
  )
}

export default Hero4