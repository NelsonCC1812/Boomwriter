import React from 'react'
import { Redirect } from 'react-router-dom'

//data
import data from '../../data/author.json'

// components
import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'

// styles
import './author-wiki.css'

const AuthorWiki = (props) => <div className='author-wiki'>

    { console.log(props.match.params.author) }

    <Navbar />



    <Footer />

</div>

export default AuthorWiki