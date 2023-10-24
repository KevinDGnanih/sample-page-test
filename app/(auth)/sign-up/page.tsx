"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignUp = () => {

    const router = useRouter();

    useEffect(() => {
        async function checkSession() {
            const session = await getSession();
            if (session) {
                router.push('/');
            }
        }
    })

    const [formData, setFormData] = useState({
        email: '', // Use formData.email
        password: '', // USe formData.password
        confirmPassword: '', // Use formData.confirmPassword
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password === formData.confirmPassword) {
            const response = await signIn('credentials', 
            { 
                email: formData,
                password: formData, 
            });


        if (!response.error) {
            // If sign-up is successful, navigate to the home page
            router.push('/')
        } else {
            // Handle signup error
            console.error('Sign-up failed', response.error)
        }
    } else {
        console.error('Password do not match');
    };

    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }


    

    return (
        <div className='form-signin w-100 m-auto border rounded-4 shadow text-center'>
            <form onSubmit={handleSubmit}>
                <i className="bi bi-fire h3 mb-2 text-black"></i>
                <p className='fw-normal mb-3 h3'>
                    Please sign up
                </p>
                <div className='form-floating mb-4'>
                    <input
                        type='email'
                        name='email'
                        className='form-control'
                        id='floatingInput'
                        placeholder='Enter your email...'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Email address</label>
                </div>
                <div className='form-floating mb-4'>
                    <input
                        type='password'
                        name='password'
                        className='form-control text-black'
                        id='floatingPassword'
                        placeholder='Enter your password...'
                        value={formData.password}
                        onChange={handleChange}
                        required

                    />
                    <label>Password</label>
                </div>
                <div className='form-floating'>
                    <input
                        type='password'
                        name='confirmPassword'
                        className='form-control'
                        id='floatingPassword1'
                        placeholder='Enter your password...'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required

                    />
                    <label>Re-enter password</label>
                </div>
                <div className='form-check text-start my-3'>
                    <input
                        type='checkbox'
                        className='form-check-input'
                        value="remember-me"
                        id='flexCheckDefault'
                        placeholder='Checkbox'

                    />
                    <label className='form-check-label'> Remember me </label>
                </div>
                <button type='submit' className='btn w-100 py-2 btn-1 mb-3 text-white'>Sign Up</button>
                <div className='text-danger'></div>
                <p className='text-center'>Already registered? <Link className='text-danger' href='/sign-in' passHref>Login here!</Link></p>
            </form>
        </div>
    );
}

export default SignUp;