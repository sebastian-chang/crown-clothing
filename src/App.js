import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import HomePage from './components/pages/homepage/homepage'
import ShopPage from './components/pages/shop/shop'
import Header from './components/header/header.jsx'
import SignInUp from './components/pages/shop/sign-in-up/sign-in-up'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInUp} />
      </Switch>
    </div>
  )
}

export default App
