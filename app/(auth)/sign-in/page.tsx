import Link from 'next/link';
import React from 'react'


const SignIn = () => {
return (
<div className='form-signin w-100 m-auto border text-center rounded-4 shadow'>
    <form className=''>
            <i className="bi bi-fire fs-3 mb-2 text-black"></i>
            <p className='fw-normal mb-3 h3 text-center'>
                Please sign in
            </p>
            <div className='form-floating mb-4'>
                <input type='email' className='form-control' id='floatingInput' placeholder='Enter your email...' />
                <label>Email address</label>
            </div>
            <div className='form-floating'>
                <input type='password' className='form-control' id='floatingPassword'
                    placeholder='Enter your password...' />
                <label>Password</label>
            </div>
            <div className='form-check text-start my-3'>
                <input type='checkbox' className='form-check-input' value="remember-me" id='flexCheckDefault'
                    placeholder='Checkbox' />
                <label className='form-check-label'> Remember me </label>
            </div>
            <button className='btn w-100 py-2 btn-1 mb-3 text-white'>Sign in</button>
            <p className='text-center'>Not registered? <Link href='/sign-up' className='text-danger'>Create an account</Link></p>
    </form>

</div>
)
}

export default SignIn;