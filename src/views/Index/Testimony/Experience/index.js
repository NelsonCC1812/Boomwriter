import React from 'react'
import { Link } from 'react-router-dom'

// styles
import './experience.css'

const Experience = () => <article className='experience'>

    <img className='experience-img' src='./images/index/testimony/d-wilson.jpg' alt='D. Wilson' />

    <div className='text-container'>
        <p className='text'>The Writing Bee was the most valuable writing experience I have had with my class in many years. My students were fully engaged - they collaborated, edited, imagined, improved, and happily worked for many hours on their chapter writing. My students improved their writing skills and also learned that they love writing. Invaluable lessons. Thank you, BoomWriter!</p>
        <p className='sign'>D.Wilson</p>
        <p className='ubication'>Camino Elementary School, Camino, California USA</p>
    </div>

    <Link to='#' className='link btn'>Start your class writing bee</Link>

</article>

export default Experience