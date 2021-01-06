import React from 'react'

// components
import TickListCard from './TickListCard'

// data
import data from '../../../../data/tick-list.json'

// styles
import './table.css'

const Table = () => <article className='table'>

    <h3>The writing bee will improve your student's learning by providing:</h3>

    <ul className='tick-list'>

        { data.map(elm => <TickListCard key={ elm.title } { ...elm } />) }

    </ul>

</article>

export default Table