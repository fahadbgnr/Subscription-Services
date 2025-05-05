import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="Email"
                            name='name'
                            required
                        />

                        <label className="label">Photo Url</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="Email"
                            name='photo'
                            required
                        />

                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            name='email'
                            required
                        />

                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            name='password'
                            required
                        />
                        <button className="btn btn-neutral mt-4">Register</button>
                        <h2 className='font-semibold text-center pt-5'>Allready Have An Account ?<Link to='/auth/login' className='text-secondary'>Login</Link></h2>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;