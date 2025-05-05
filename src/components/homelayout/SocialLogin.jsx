import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaSquareGithub } from 'react-icons/fa6';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5 text-center text-accent'>Login With</h2>
            <div className="flex flex-col mx-5 my-5 gap-3">
                <button className='btn btn-secondary text-xs lg:text-lg'><FaGoogle></FaGoogle> Login With Google</button>
                <button className='btn btn-primary  text-xs lg:text-lg'><FaSquareGithub></FaSquareGithub> Login With GitHub</button>

            </div>


        </div>
    );
};

export default SocialLogin;