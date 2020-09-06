import React from 'react'
import './App.css'
import AddressList from './components/AddressList'
import AddressInfoPage from './components/AddressInfoPage'
import AddAddressPage from './components/AddAddressPage'
import EditAddressPage from './components/EditAddressPage'
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
          <Route path='/addressinfo/update/:id'>
            <EditAddressPage />
          </Route>
          <Route path='/addressinfo/:id'>
            <AddressInfoPage />
          </Route>
          <Route path='/add'>
            <AddAddressPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
