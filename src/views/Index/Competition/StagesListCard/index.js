import React from 'react'

// styles
import './stages-list-card.css'

const StagesListCard = ({ title, text }) => <li className='stages-list-card'>

    <h4 className='title'>{ title }</h4>
    <p className='text'>{ text }</p>

</li>

export default StagesListCard