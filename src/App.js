import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// pages
import Index from './pages/Index'

// styles
import './App.css'

const App = () => <div className='app'>

  <Switch>

    <Route exact path='/' render={ () => <Index /> } />


    <Redirect to='/' />
  </Switch>

</div>

export default App