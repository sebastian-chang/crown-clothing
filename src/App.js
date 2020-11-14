import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './App.css';

import { checkUserSession } from './redux/user/user-actions'

import HomePage from './components/pages/homepage/homepage'
import ShopPage from './components/pages/shop/shop'
import Header from './components/header/header.jsx'
import SignInUp from './components/pages/shop/sign-in-up/sign-in-up'
import CheckoutPage from './components/checkout/checkout'

const App = () => {
  // useSelector as you would mapStateToProps in class based components
  const currentUser = useSelector(state => state.user.currentUser)
  // useDispatch as you would mapDispatchToProps in class based components
  const dispatch = useDispatch()

  useEffect(() => {
    // Firebase authorization function
    // auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth)
    //     userRef.onSnapshot(snapShot => {
    //       // Sets user store to current logged in user
    //       dispatch(setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data(),
    //       }))
    //     })
    //   }
    //   else {
    //     // Removes user from user store
    //     dispatch(setCurrentUser(null))
    //   }
    // })

    dispatch(checkUserSession())

  }, [dispatch])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInUp />)} />
      </Switch>
    </div>
  )
}

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// })

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

// export default connect(null, mapDispatchToProps)(App)
export default App
