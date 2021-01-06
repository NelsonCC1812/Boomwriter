import React, { useEffect } from 'react'

// components
import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'
import PastWritingBeesMain from './PastWritingBeesMain'

// styles
import './past-writing-bees.css'

const PastWritingBees = () => {

    useEffect(() => { document.title = 'Past Writing Bees' })

    return <div>

        <Navbar />

        <PastWritingBeesMain />

        <Footer />

    </div>
}

export default PastWritingBees