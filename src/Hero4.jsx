import React from 'react'
import "./Info3.css"
const Hero4 = () => {
  return (
    <div className='hero4'>
        <div className='content'>
        <p>iletişim ve ayrıntılı bilgi için lütfen arayın</p>
        <p>Selahattin Aksoy</p>
        <p> <a href='tel:+905355555555'>+90 552 080 7450</a></p>
        <iframe width='300' height='300' src={require('./images/WhatsApp Video 2022-08-25 at 10.08.02 AM.mp4')} title='Youtube video player' frameBorder="1" allow="autoplay='0'"  allowFullScreen />
    </div>
    </div>
  )
}

export default Hero4