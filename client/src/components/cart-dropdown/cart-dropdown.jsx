import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { toggleCartHidden } from '../../redux/cart/cart-actions'

const CartDropdown = (props) => {
  const cartItems = useSelector(state => selectCartItems(state))
  const dispatch = useDispatch()
  return (
    <div className='cart-dropdown' >
      <div className='cart-items'>
        {
          cartItems.length ? (
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
              <span className='empty-message'>Your cart is empty</span>
            )
        }
      </div>
      <CustomButton
        onClick={() => {
          props.history.push('/checkout')
          dispatch(toggleCartHidden())
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

export default withRouter(CartDropdown)
