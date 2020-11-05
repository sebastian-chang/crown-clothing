import CartActionTypes from './cart-types'

// Hide/show cart dropdown
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

// Add an item to the cart
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

// Decrease item quantity from the cart
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})

// Remove entire item from cart
export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})
