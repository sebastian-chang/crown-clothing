import React, { useState } from 'react'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

const SignIn = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = user
        try {
            await auth.signInWithEmailAndPassword(email, password)
            setUser({
                email: '',
                password: '',
            })
        }
        catch(error){
            console.error(error)
        }
    }

    const handleChange = event => {
        const { value, name } = event.target

        setUser(prevUser => {
            const updatedField = { [name]: value }
            const editedUser = Object.assign({}, prevUser, updatedField)
            return editedUser
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
                    value={user.email}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={user.password}
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
