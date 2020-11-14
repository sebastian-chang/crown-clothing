import { all, call, takeLatest, put } from 'redux-saga/effects'

import UserActionsTypes from '../user/user-types'
import { clearCart } from './cart-actions'

export function* clearCartSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess () {
  yield takeLatest(UserActionsTypes.SIGN_OUT_SUCCESS, clearCartSignOut)
}

export function* cartSagas () {
  yield (all([call(
    onSignOutSuccess,
  )]))
}
