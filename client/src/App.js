import React from 'react'
import './App.css'
import AddressList from './components/AddressList'
import AddressInfoPage from './components/AddressInfoPage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div>
        <nav>
          {' '}
          <Link to='/'>
            <h3>AddressBook</h3>{' '}
          </Link>
        </nav>
        <Switch>
          <Route exact path='/'>
            <AddressList />
          </Route>
          <Route path='/addressinfo/:id'>
            <AddressInfoPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
