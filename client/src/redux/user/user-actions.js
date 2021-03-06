import UserActionTypes from './user-types'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

// Sign in actions
export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
})

// Sign out actions
export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START,
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
})

export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

// Sign up actions
export const signUpStart = userInfo => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userInfo
})

export const signUpSuccess = user => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: user
})

export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})
