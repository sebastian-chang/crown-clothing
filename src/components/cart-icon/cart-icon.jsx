import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'

const CartIcon = () => {
  const dispatch = useDispatch()
  // const itemCount = useSelector(state => state.cart.cartItems.reduce((accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity, 0))
  const itemCount = useSelector(state => selectCartItemsCount(state))

  const toggleCart = () => dispatch(toggleCartHidden())

  return (
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce((accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity, 0
//   )
// })

// const mapStateToProps = state => ({
//   itemCount: selectCartItemsCount(state)
// })

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// })

// export default connect(null, mapDispatchToProps)(CartIcon)

export default CartIcon
