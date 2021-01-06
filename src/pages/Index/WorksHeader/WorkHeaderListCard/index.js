import React from 'react'

// styles
import './work-header-list-card.css'

const WorkHeaderListCard = ({ img, title, text }) => <li className='work-header-list-card'>

    <img src={ img } alt={ title } />
    <h4>{ title }</h4>
    <p>{ text }</p>

</li>

export default WorkHeaderListCard