import React, { use, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../provider/AuthProvider';

const MyProfile = () => {
    const { currentUser, reloadUser } = use(AuthContext);
    const [name, setName] = useState(currentUser?.displayName || "");
    const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || "");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
  
    const handleUpdate = async (e) => {
      e.preventDefault();
      setLoading(true);
      setMessage("");
  
      try {
        await updateProfile(currentUser, {
          displayName: name,
          photoURL: photoURL,
        });
        if (reloadUser) await reloadUser(); 
        setMessage("Profile updated successfully!");
      } catch (error) {
        setMessage("Error updating profile: " + error.message);
      } finally {
        setLoading(false);
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
                    <h2 className="text-2xl font-bold mb-4">My Profile</h2>
                    <div className="mb-4">
                        <img
                            src={currentUser?.photoURL || "/default-avatar.png"}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover"
                        />
                        <p><strong>Email:</strong> {currentUser?.email}</p>
                        <p><strong>Name:</strong> {currentUser?.displayName}</p>
                    </div>

                    <form onSubmit={handleUpdate} className="space-y-4">
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            placeholder="Update Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            placeholder="Update Photo URL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save Changes"}
                        </button>
                    </form>

                    {message && <p className="mt-4 text-center">{message}</p>}
                </div>
            </main>
            <footer className='w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default MyProfile;