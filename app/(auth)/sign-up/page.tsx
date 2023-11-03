"use client";

import Link from 'next/link'
import React, { useState } from 'react';

const page = () => {

const [formData, setFormData] = useState({
email: '', // Use formData.email
password: '', // USe formData.password
confirmPassword: '', // Use formData.confirmPassword
});



return (
<div className='form-signin w-100 m-auto border rounded-4 shadow text-center'>
    <form method='POST' onSubmit={()=> {}}>
        <i className="bi bi-fire h3 mb-2 text-black"></i>
        <p className='fw-normal mb-3 h3'>
            Please sign up
        </p>
        <div className='form-floating mb-4'>
            <input type='email' name='email' className='form-control' id='floatingInput'
                placeholder='Enter your email...' value={formData.email} onChange={()=> {}}
            required
            />
            <label>Email address</label>
        </div>
        <div className='form-floating mb-4'>
            <input type='password' name='password' className='form-control text-black' id='floatingPassword'
                placeholder='Enter your password...' value={formData.password} onChange={()=> {}}
            required

            />
            <label>Password</label>
        </div>
        <div className='form-floating'>
            <input type='password' name='confirmPassword' className='form-control' id='floatingPassword1'
                placeholder='Enter your password...' value={formData.confirmPassword} onChange={()=> {}}
            required

            />
            <label>Re-enter password</label>
        </div>
        <div className='form-check text-start my-3'>
            <input type='checkbox' className='form-check-input' value="remember-me" id='flexCheckDefault'
                placeholder='Checkbox' />
            <label className='form-check-label'> Remember me </label>
        </div>
        <button type='submit' className='btn w-100 py-2 btn-1 mb-3 text-white'>Sign Up</button>
        <div className='text-danger'></div>
        <p className='text-center'>Already registered?
            <Link className='text-danger' href='/sign-in' passHref>Login here!</Link>
        </p>
    </form>
    <Link href='/'>
    <button>home</button>
    </Link>
</div>
)
}

export default page