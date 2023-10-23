"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-dom';


const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(null);



return (
<div className='form-signin w-100 m-auto border rounded-4 shadow'>
    <form className=''>
            <i className="bi bi-fire fs-3 mb-2 text-black"></i>
            <p className='fw-normal mb-3 h3'>
                Please sign up
            </p>
            <div className='form-floating mb-4'>
                <input type='email' className='form-control' id='floatingInput' placeholder='Enter your email...' required />
                <label>Email address</label>
            </div>
            <div className='form-floating'>
                <input type='password' className='form-control' id='floatingPassword'
                    placeholder='Enter your password...' {...register('password')} required />
                <label>Password</label>
            </div>
            <div className='form-floating'>
                <input type='password' className='form-control' id='floatingPassword1'
                    placeholder='Enter your password...' {...register('re-password')} required />
                <label>Re-enter password</label>
            </div>
            <div className='form-check text-start my-3'>
                <input type='checkbox' className='form-check-input' value="remember-me" id='flexCheckDefault'
                    placeholder='Checkbox' {...register('remember-me')} />
                <label className='form-check-label'> Remember me </label>
            </div>
            <button onClick={handleSubmit(() => {
                // The form submission logic goes here
            })} className='btn w-100 py-2 btn-1 mb-3 text-white'>Sign in</button>
            <p className='text-center'>Already registered? <Link className='text-danger' href='#'>Login here!</Link></p>


    </form>

</div>
)
}

export default SignIn;