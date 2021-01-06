import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// views
import Index from './views/Index'
import PastWritingBees from './views/PastWritingBees'


// styles
import './App.css'

const App = () => <div className='app'>

  <Switch>

    <Route exact path='/' render={ () => <Index /> } />
    <Route exact path='/past-writing-bees' render={ () => <PastWritingBees /> } />

    <Redirect to='/' />
  </Switch>

</div>

export default App