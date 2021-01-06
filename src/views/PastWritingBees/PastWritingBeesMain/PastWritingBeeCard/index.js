import React from 'react'

// styles
import './past-writing-bee-card.css'

const PastWritingBeeCard = ({ img, title, author, date, link }) => <li className='past-writing-bee-card'>
    <a href={ link } className='link'>

        <div className='image' style={ { backgroundImage: `url(${img})` } }></div>

        <div className='text-container'>

            <p className='date'>{ date }</p>
            <p className='title'>{ title }</p>

            <p className='story-start'>StoryStart by:</p>
            <p className='author'>{ author }</p>

        </div>

    </a>
</li >

export default PastWritingBeeCard