import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { singIn } = use(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email, password})
        singIn(email, password).then(result => {
            const user = result.user;
            console.log(user)

        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              alert(errorCode, errorMessage)
            });

    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">

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

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <h2 className='font-semibold text-center pt-5'>Don't Have An Account ?<Link to='/auth/register' className='text-secondary'>Register</Link></h2>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;