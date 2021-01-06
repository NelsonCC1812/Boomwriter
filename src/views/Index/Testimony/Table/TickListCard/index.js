import React from 'react'

// resources
import tick from './images/tick.svg'

// styles
import './tick-list-card.css'

const TickListCard = ({ title, explanation }) => <li className='tick-list-card'>

    <img className='tick' src={ tick } alt='tick' />
    <h5 className='title'>{ title }</h5>
    <p className='explanation'>{ explanation }</p>

</li>

export default TickListCard