import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';

import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';

const ForgatePass = () => {
    const [email, setEmail] = useState('');
    const location = useLocation();
  
    // Use query parameter to get email from login page (if available)
    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const emailFromLogin = queryParams.get('email');
      if (emailFromLogin) {
        setEmail(emailFromLogin); // Set the email entered on the login page
      }
    }, [location]);
  
    const handleResetPassword = async (e) => {
      e.preventDefault();
  
      try {
        await sendPasswordResetEmail(AuthContext, email);
        toast.success('Password reset email sent!');
        window.location.href = 'https://mail.google.com'; // Redirect to Gmail
      } catch (error) {
        toast.error('Error sending reset email');
      }
    };
    return (
        <div>
            <Helmet>
                <title>Forget Password</title>

            </Helmet>
            <div className="max-w-md mx-auto p-4 min-h-screen my-20">
                <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
                <form onSubmit={handleResetPassword} className="space-y-4">
                    <div className="form-control">
                        <label className="label" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default ForgatePass;