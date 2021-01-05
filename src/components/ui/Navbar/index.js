import React from 'react'
import { Link } from 'react-router-dom'

// Sytles
import './navbar.css'

export default () => <header className='navbar'>

    <nav className='nav-links'><ul>

        <li><figure className='logo-container'>
            <Link to='/'> <img src='images/logo.png' alt='Menu logo' /> </Link>
        </figure></li>


        <li><Link className='link' to='/'>Home</Link></li>

        <li><Link className='link' to='/past_writing_bees'>Past Writing Bees</Link></li>

    </ul>

        <figure className='menu-container'> <img src='images/menu.svg' alt='Menu' /></figure>

    </nav>


</header>