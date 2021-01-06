import React from 'react'

// components
import Hero from './Hero'
import HeaderDivision from './HeaderDivision'
import Testimony from './Testimony'
import Competition from './Competition'
import WorkHeader from './WorksHeader'
import IndexFooter from './IndexFooter'

// styles
import './index.css'

const Index = () => <main className='index'>

    <Hero />
    <HeaderDivision />
    <Testimony />
    <Competition />
    <WorkHeader />
    <IndexFooter />

</main>

export default Index