import React from 'react'

// data
import data from '../../../data/competition-stages.json'

// components
import StagesListCard from './StagesListCard'

// styles
import './competition.css'

const Competition = () => <section className='competition'>

    <h2 className='title'>The writing Bee Competition</h2>
    <p className='lead'>The Writing Bee kicks off in schools with students participating in district or school-based Qualifying sessions. Students who qualify move on to the Finals with a chance to be crowned The Writing Bee Champion.</p>

    <img src='images/index/competition/competition.png' alt='competition stages' />

    <ul className='stages-list'>
        { data.map(elm => <StagesListCard key={ elm.title } { ...elm } />) }
    </ul>

</section>

export default Competition