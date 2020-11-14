import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { signUpStart } from '../../redux/user/user-actions'
import FormInput from '../form-input/form-input'
import CustonButton from '../custom-button/custom-button'
import './sign-up.styles.scss'


const SignUp = () => {
    const [newUser, setNewUser] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const dispatch = useDispatch()

    // Function to handle user sign up
    const handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = newUser

        // Checks to see if user typed in same password
        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return
        }
        else {
            try {
                // Creates a new user using firebase auth create new user
                // const { user } = await auth.createUserWithEmailAndPassword(email, password)
                // Creates a new document in our firebase database with user creds adding user's displayname
                // await createUserProfileDocument(user, { displayName })
                dispatch(signUpStart({ displayName, email, password }))
                // Resets form data
                setNewUser({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                })
            }
            catch (error) {
                console.error(error)
            }
        }
    }
    const handleChange = event => {
        event.persist()

        setNewUser(prevUser => {
            const updatedField = { [event.target.name]: event.target.value }
            const updatedUser = Object.assign({}, prevUser, updatedField)
            return updatedUser
        })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do no not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={newUser.displayName}
                    label='Display Name'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={newUser.email}
                    label='Email'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={newUser.password}
                    label='Password'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={newUser.confirmPassword}
                    label='Confirm Password'
                    handleChange={handleChange}
                    required
                />
                <CustonButton type='submit'>Sign Up</CustonButton>
            </form>
        </div>
    )
}

export default SignUp
