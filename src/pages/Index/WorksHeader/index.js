import React from 'react'

// data
import data from '../../../data/work-header.json'

// components
import WorkHeaderListCard from './WorkHeaderListCard'

// styles
import './work-header.css'

const WorkHeader = () => <section className='work-header'>

    <div className='header'>
        <h3>The Writing Bee is powered by </h3>
        <img src='images/index/workHeader/small-logo.png' alt='BoomWriter' />
    </div>

    <p className='lead'>The Writing Bee employs BoomWriter’s unique content generation platform that allows students to compete and collaborate online as they:</p>

    <ul className='work-header-list'>
        { data.map(elm => <WorkHeaderListCard key={ elm.title } { ...elm } />) }
    </ul>

</section>

export default WorkHeader