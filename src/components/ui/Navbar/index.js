import React from 'react'
import { Link } from 'react-router-dom'

// Sytles
import './navbar.css'

const Navbar = () => <header className='navbar'>

    <nav className='nav-links'><ul>

        <li><figure className='nav-logo-container'>
            <Link to='/'> <img src='images/navbar/logo.png' alt='Menu logo' /> </Link>
        </figure></li>


        <li><Link className='link' to='/'>Home</Link></li>

        <li><Link className='link' to='/past-writing-bees'>Past Writing Bees</Link></li>

    </ul>

        <figure className='menu-container'> <img src='images/navbar/menu.svg' alt='Menu' /></figure>

    </nav>


</header>

export default Navbar