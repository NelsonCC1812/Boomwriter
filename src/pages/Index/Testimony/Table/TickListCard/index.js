import React from 'react'

// styles
import './tick-list-card.css'

const TickListCard = ({ title, explanation }) => <li className='tick-list-card'>

    <h5 className='title'>{ title }</h5>
    <p className='explanation'>{ explanation }</p>

</li>

export default TickListCard