import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Log out successfully");
            })
            .catch((error) => {
                console.log(error);
                toast.error("Please try again");
            });
    };

    const link = (
        <>
            <NavLink to='/' className='m-2 text-accent active:text-indigo-800'>Home</NavLink>
            <NavLink to='/profile' className='m-2 text-accent active:text-indigo-800'>MyProfile</NavLink>
            <NavLink to='/subscription' className='m-2 text-accent active:text-indigo-800'>Subscription</NavLink>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>

                    <div>{user && user.email}</div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>

                <h2 className="text-3xl">
                    C<span className='text-secondary'>H</span>I<span className='text-secondary'>P</span>
                </h2>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>

            <div className="navbar-end">
                <img className='px-5 w-20 rounded-full' src={user ? user.photoURL : userIcon} alt="" />

                {user ? (
                    <Link to='/auth/login' onClick={handleLogout} className='btn btn-primary'>Logout</Link>
                ) : (
                    <Link to='/auth/login' className="btn btn-primary">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
