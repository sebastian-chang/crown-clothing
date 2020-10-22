import React from 'react'

import './sign-in-up.styles.scss'
import SignIn from '../../../sign-in/sign-in'
import SignUp from '../../../sign-up/sign-up'

const SignInUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInUp
