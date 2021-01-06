import React from 'react'

// data
import data from '../../../data/timeline.json'

// components
import TimelineListCard from './TimelineListCard'

// styles
import './timeline.css'

const Timeline = () => <section className='timeline'>

    <h2>The Writing Bee Timeline</h2>

    <ul className='timeline-list'>
        { data.map(elm => <TimelineListCard key={ elm.title } { ...elm } />) }
    </ul>

</section>

export default Timeline