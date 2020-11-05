import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { useSelector } from 'react-redux'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'

const Header = () => {
    // useSelector as you would mapStateToProps in class based components
    // `state` is from our store.js `user` is from root-reducer.js which combines all reducers
    // `currentUser` is the state we created in user-reducer.js
    const currentUser = useSelector(state => state.user.currentUser)
    const hidden = useSelector(state => state.cart.hidden)
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {/* {console.log('this is current user in header ', currentUser)} */}
                {
                    currentUser ? (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>) : (<Link className='option' to='/signin'>SIGN IN</Link>)
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
}

// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
//     currentUser,
//     hidden
// })
// const mapStateToProps = createStructuredSelector({
//     currentUser: selectCurrentUser,
//     hidden: selectCartHidden,
// })

// export default connect(mapStateToProps)(Header)

export default Header
