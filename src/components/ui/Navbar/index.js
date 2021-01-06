import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Sytles
import './navbar.css'

const Navbar = () => {

    const [isNavbarOpened, setIsNavbarOpened] = useState(false)

    return <header className='navbar'>

        <nav className='nav-links'><ul>

            <li><figure className='nav-logo-container'>
                <Link to='/'> <img src='images/navbar/logo.png' alt='Menu logo' /> </Link>
            </figure></li>


            <li><Link className='link pc-link' to='/'>Home</Link></li>

            <li><Link className='link pc-link' to='/past-writing-bees'>Past Writing Bees</Link></li>

        </ul>

            <figure onClick={ () => setIsNavbarOpened(!isNavbarOpened) } className='menu-container'> <img src='images/navbar/menu.svg' alt='Menu' /></figure>
            <ul className={ 'mb-links ' + (isNavbarOpened ? "show" : "") }>
                <li><Link className='link' to='/'>Home</Link></li>

                <li><Link className='link' to='/past-writing-bees'>Past Writing Bees</Link></li>
            </ul>

        </nav>

    </header>
}

export default Navbar