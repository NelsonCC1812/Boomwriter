import React from 'react'
import ReactDOM from 'react-dom'

// react-router-dom
import { BrowserRouter } from 'react-router-dom'

// Components
import App from './App'

// Styles
import './index.css'

ReactDOM.render(<BrowserRouter>
    <React.StrictMode><App /></React.StrictMode>
</BrowserRouter>, document.getElementById('root'))