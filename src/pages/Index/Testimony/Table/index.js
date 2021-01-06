import React from 'react'
import { Link } from 'react-router-dom'

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

    <Link to='/#' className='link btn'>Start your class writing bee</Link>

</article>

export default Table