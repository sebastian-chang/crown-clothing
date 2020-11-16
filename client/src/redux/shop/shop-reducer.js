import ShopActionTypes from './shop-types'
const INTIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: ''
}

const shopReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      }
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      }
    case ShopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    case ShopActionTypes.UPDATE_COLLECTION:
      return {
        ...state,
        collections: action.paylod,
      }
    default:
      return state
  }
}

export default shopReducer
