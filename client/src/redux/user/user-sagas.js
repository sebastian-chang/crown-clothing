import { takeLatest, put, all, call } from 'redux-saga/effects'

import UserActionTypes from './user-types'
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from './user-actions'
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'

// Generator function for signing user in.  Takes parameter of userAuth from either
// Username and password or Google Signin.
export function* getSnapshotFromUserAuth (userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({
      id: userSnapshot.id,
      ...userSnapshot.data(),
    }))
  }
  catch (error) {
    yield put(signInFailure(error))
  }
}

export function* isUserAuthenticated () {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) {
      return
    }
    yield getSnapshotFromUserAuth(userAuth)
  }
  catch (error) {
    yield put(signInFailure(error))
  }
}

export function* isSignOut () {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  }
  catch (error) {
    yield put(signOutFailure(error))
  }
}

// Goolge signin function sending user from Goolge sign in to generator function
export function* signInWithGoogle () {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  }
  catch (error) {
    yield put(signInFailure(error))
  }
}

// Signin with username and password function sending user info to generator function
export function* signInWithEmail ({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  }
  catch (error) {
    yield put(signInFailure(error))
  }
}

// Sign up user with given user creds
export function* signUpUser ({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield createUserProfileDocument(user, { displayName })
    yield console.log('hopefully this created the user.  now trying to sign in', user)
    yield put(signUpSuccess({ email, password }))
  }
  catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* onGoogleSignInStart () {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSigninStart () {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession () {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart () {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, isSignOut)
}

export function* onSignUpStart () {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpUser)
}

export function* userSagas () {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSigninStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
  ])
}
