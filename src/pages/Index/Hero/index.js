import React from 'react'

// components
import Navbar from '../../../components/ui/Navbar'

// styles
import './hero.css'

const Hero = () => <section className='hero'>

    <Navbar />

    <div className='heading-container'>

        <a href='/spoken_word'><h1 className='heading'>

            <span className='hero-scroll'>The 2020</span>
            <br />

        Writing Bee

        </h1></a>

        <p className='slogan'>Because all kids love writing stories!</p>

        <figure className='logo-container'>
            <caption>Powered by:</caption>
            <img src='images/index/hero/boomwriter.png' alt='boomwriter' />
        </figure>

    </div>

    <div className='layer'>
        <img className='map' src='images/index/hero/map.png' alt='map' />
        <img className='corner' src='images/index/hero/corner.png' alt='For Students in Grades 4-6 / Ages 9-12' />
    </div>

</section>

export default Hero