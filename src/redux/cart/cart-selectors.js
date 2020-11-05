import { createSelector } from 'reselect'

// Input selector.  Default to grab the correct state we need
const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

// Returns if cart dropdown is hidden
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

// cart items count selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity * cartItem.price, 0)
)
