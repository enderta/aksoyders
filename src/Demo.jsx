import React from 'react'
import './Demo.css'

const Demo = () => {
  return (
    <div className='video' id='video' >
    <div className='container'>
        <div className='col-1'>
            <p>iletişim ve ayrıntılı bilgi için lütfen arayın </p>
            <p>Selahattin Aksoy
            <br/>
            <a href='tel:+905355555555'>+90 552 080 7450</a>
              
            </p>
         
        </div>
        <div className='col-2'>
            <iframe width='570' height='320' src={require('./images/WhatsApp Video 2022-08-25 at 10.08.02 AM.mp4')} title='Youtube video player' frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
    </div>
</div>
  )
}

export default Demo