import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { useSelector } from 'react-redux'


import './header.styles.scss'
import { ReactComponent as Logo } from '../../assests/crown.svg'

const Header = () => {
    const currentUser = useSelector(state => state.user.currentUser)
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
                    currentUser ? (<div className='option' onClick={() => auth.signOut()}>SIGN OUT {currentUser.displayName}</div>) : (<Link className='option' to='/signin'>SIGN IN</Link>)
                }
            </div>
        </div>
    )
}

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })

// export default connect(mapStateToProps)(Header)

export default Header
