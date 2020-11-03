import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user-actions'
import './App.css';

import HomePage from './components/pages/homepage/homepage'
import ShopPage from './components/pages/shop/shop'
import Header from './components/header/header.jsx'
import SignInUp from './components/pages/shop/sign-in-up/sign-in-up'

const App = () => {
  // const [currentUser, setCurrentUser] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          }))
        })
      }
      else {
        dispatch(setCurrentUser(null))
      }
    })

  }, [dispatch])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInUp} />
      </Switch>
    </div>
  )
}

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

// export default connect(null, mapDispatchToProps)(App)
export default App
