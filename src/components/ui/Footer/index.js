import React from 'react'

// images
import boomwriter from './images/boomwriter.png'
import writingbee from './images/writingbee.png'
import googlePartner from './images/google-partner.png'

// styles
import './index-footer.css'

const Footer = () => <footer className='index-footer'>

    <ul className='footer-logos'>

        <img src={ boomwriter } alt='BoomWriter' />
        <img src={ writingbee } alt='the Writing Bee' />
        <img src={ googlePartner } alt='Google for Education Partner' />

    </ul>

    <div className='text-container'>
        <p>The Writing Bee is powered by BoomWriter</p>
        <p>To find out more visit <a href='https://boowriter.com' rel='noopener noreferrer'>www.boomwriter.com</a></p>
    </div>


</footer>

export default Footer