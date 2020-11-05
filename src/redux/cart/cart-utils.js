// Increase item quantity if item already in cart, otherwise add item to cart
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

  if (exisitingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem)
  }

  return ([...cartItems, { ...cartItemToAdd, quantity: 1 }])
}

// Decrease item quanity from cart line item
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const exisitingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  )

  if (exisitingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}
