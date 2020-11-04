import React from 'react'
import { useDispatch } from 'react-redux'

import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import { useEffect } from 'react'

const CartIcon = () => {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(toggleCartHidden())
  // }, [dispatch])

  const toggleCart = () => dispatch(toggleCartHidden())

  return (
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// })

// export default connect(null, mapDispatchToProps)(CartIcon)

export default CartIcon
