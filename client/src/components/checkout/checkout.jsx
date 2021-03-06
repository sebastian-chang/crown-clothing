import React from 'react'
import { useSelector } from 'react-redux'

import './checkout.styles.scss'
import CheckoutItem from '../checkout-item/checkout-item'
import StripeCheckoutButton from '../stripe-button/stripe-button'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors'

const CheckoutPage = () => {
  const cartItems = useSelector(state => selectCartItems(state))
  const total = useSelector(state => selectCartTotal(state))
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem =>
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
      }
      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        42424 4242 4242 4242 - Exp: 12/24 - CVV 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  )
}

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   total: selectCartTotal,
// })

export default CheckoutPage
