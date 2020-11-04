import { createSelector } from 'reselect'

// Input selector
const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

// cart items count selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity, 0)
)
