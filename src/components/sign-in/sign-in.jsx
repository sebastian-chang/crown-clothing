import React, { useState } from 'react'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

const SignIn = () => {
    const [signIn, setSignIn] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = event => {
        event.preventDefault()

        setSignIn({
            email: '',
            password: '',
        })
    }

    const handleChange = event => {
        const { value, name } = event.target

        setSignIn(prevSignIn => {
            const updatedField = { [name]: value }
            const editedSignIn = Object.assign({}, prevSignIn, updatedField)
            return editedSignIn
        })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={signIn.email}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={signIn.password}
                    handleChange={handleChange}
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn
