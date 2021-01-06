import React from 'react'

// data
import data from '../../../data/past-writing-bees.json'

// components
import PastWritingBeeCard from './PastWritingBeeCard'

// styles
import './past-writing-bees-main.css'


const PastWritingBeesList = () => <main className='past-writing-bees-main'>

    <h1>Past Writing Bees</h1>

    <ul className='past-writing-bees-list'>
        { data.map(elm => <PastWritingBeeCard key={ elm.title } { ...elm } />) }
    </ul>

</main>

export default PastWritingBeesList