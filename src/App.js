import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import { auth } from './firebase/firebase.utils'
import './App.css';

import HomePage from './components/pages/homepage/homepage'
import ShopPage from './components/pages/shop/shop'
import Header from './components/header/header.jsx'
import SignInUp from './components/pages/shop/sign-in-up/sign-in-up'

const App = () => {
  const [currentUser, setCurrentUser] = useState({})
  // let unsubscribeFromAuth = useRef(null)

  useEffect(() => {
    // unsubscribeFromAuth.current =
    auth.onAuthStateChanged(user => {
      setCurrentUser({ user })
      console.log('this is current user', user)
    })

    // return () => {
    //   // unsubscribeFromAuth.current =
    //   setCurrentUser({currentUser: null})
    //   console.log('is this getting called', currentUser)
    // }
  }, [])


  return (
    <div>
      <Header currentUser={currentUser.user} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInUp} />
      </Switch>
    </div>
  )
}

export default App
