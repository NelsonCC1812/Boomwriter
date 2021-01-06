import React from 'react'
import { Link } from 'react-router-dom'

// styles
import './header-division.css'

const HeaderDivision = () => <section className='header-division'>

    <h2>A global event that starts right in your classroom!</h2>

    <p>Writing Bee Qualifying Rounds take place in individual classrooms around the world. Classroom-based winners and top vote-getters qualify for the Writing Bee Finals and a chance to become The Writing Bee Champion!</p>

    <Link className='btn link' to='/account/signup'></Link>

</section>

export default HeaderDivision