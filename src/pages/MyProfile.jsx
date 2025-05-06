import React, { use, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../provider/AuthProvider';

const MyProfile = () => {
    const user = use(AuthContext);
    const [name, setName] = useState(user.displayName || '');
    const [photoURL, setPhotoURL] = useState(user.photoURL || '');
  
    // Handle form submission (update profile)
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });
        toast.success('Profile updated successfully!');
      } catch (error) {
        toast.error('Error updating profile!');
      }
    };
    return (
        <div>
            <Helmet>
                <title>My Profile</title>
            </Helmet>

            <nav className='w-11/12 mx-auto my-5'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto my-20 text-center min-h-screen'>
                <div className="max-w-md mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-4">Profile</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="label" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="photoURL">Photo URL</label>
                            <input
                                type="text"
                                id="photoURL"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Save Changes</button>
                    </form>
                </div>
            </main>
            <footer className='w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default MyProfile;