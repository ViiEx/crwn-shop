import React from 'react'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {singInWithGoogle} from "../../firebase/firebase.utils";

import './sign-in.style.scss'

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({email: '', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sing in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' label='Email' type='email' value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput name='password' label='Password' type='password' value={this.state.password} handleChange={this.handleChange} required/>

                    <CustomButton type="submit">SING IN</CustomButton>
                    <CustomButton onClick={singInWithGoogle}>
                        {' '}
                        Sign in with Google{' '}
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn