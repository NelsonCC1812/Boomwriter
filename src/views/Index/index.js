import React, { useEffect } from 'react'

// components
import Hero from './Hero'
import HeaderDivision from './HeaderDivision'
import Testimony from './Testimony'
import Competition from './Competition'
import WorkHeader from './WorksHeader'
import Timeline from './Timeline'
import IndexFooter from '../../components/ui/Footer'

// styles
import './index.css'


const Index = () => {

    useEffect(() => { document.title = 'The Writing Bee' })

    return <main className='index'>

        <Hero />
        <HeaderDivision />
        <Testimony />
        <Competition />
        <WorkHeader />
        <Timeline />
        <IndexFooter />

    </main>
}

export default Index