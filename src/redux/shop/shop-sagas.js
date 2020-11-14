import { all, call, put, takeLatest } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop-actions'
import ShopActionTypes from './shop-types'

export function* fetchCollectionsAsync () {
  yield console.log('I am fired from Async saga')

  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    // call takes a fucntion and arguements you would pass into said function
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    // put is similar to dispatch method
    yield put(fetchCollectionSuccess(collectionsMap))
  }
  catch (error) {
    yield put(fetchCollectionFailure(error.message))
  }
}

export function* fetchCollectionsStart () {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync,
  )
}

export function* shopSagas () {
  yield all([call(
    fetchCollectionsStart,
  )])
}
