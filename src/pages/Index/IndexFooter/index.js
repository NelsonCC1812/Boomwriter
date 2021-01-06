import React from 'react'

// styles
import './index-footer.css'

const IndexFooter = () => <footer className='index-footer'>

    <ul className='footer-logos'>

        <img src='images/index/indexFooter/boomwriter.png' alt='BoomWriter' />
        <img src='images/index/indexFooter/writingbee.png' alt='the Writing Bee' />
        <img src='images/index/indexFooter/google-partner.png' alt='Google for Education Partner' />

    </ul>

    <div className='text-container'>
        <p>The Writing Bee is powered by BoomWriter</p>
        <p>To find out more visit <a href='https://boowriter.com' rel='noopener noreferrer'>www.boomwriter.com</a></p>
    </div>


</footer>

export default IndexFooter