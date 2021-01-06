import React from 'react'
import Timeline from '..'

// styles
import './timeline-list-card.css'

const TimelineListCard = ({ img, title, text }) => <li className='timeline-list-card'>

    <img src={ img } alt={ title } />

    <div className='text-container'>
        <h4>{ title }</h4>
        <p>{ text }</p>
    </div>

</li>

export default TimelineListCard