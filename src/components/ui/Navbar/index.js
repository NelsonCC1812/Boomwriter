import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// images
import logo from './images/logo.png'
import menu from './images/menu.svg'

// Sytles
import './navbar.css'

const Navbar = () => {

    const [isNavbarOpened, setIsNavbarOpened] = useState(false)

    return <header className='navbar'>

        <nav className='nav-links'><ul>

            <li><figure className='nav-logo-container'>
                <Link to='/'> <img src={ logo } alt='Menu logo' /> </Link>
            </figure></li>


            <li><Link className='link pc-link' to='/'>Home</Link></li>

            <li><Link className='link pc-link' to='/past-writing-bees'>Past Writing Bees</Link></li>

        </ul>

            <figure onClick={ () => setIsNavbarOpened(!isNavbarOpened) } className='menu-container'> <img src={ menu } alt='Menu' /></figure>
            <ul className={ 'mb-links ' + (isNavbarOpened ? "show" : "") }>
                <li><Link className='link' to='/'>Home</Link></li>

                <li><Link className='link' to='/past-writing-bees'>Past Writing Bees</Link></li>
            </ul>

        </nav>

    </header>
}

export default Navbar