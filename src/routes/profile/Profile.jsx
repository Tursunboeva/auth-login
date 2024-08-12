import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import '../profile/Profile.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios("/auth/profile")
            .then(response => {
                setProfile(response.data);
                setLoading(false);
                toast.success("Profile loaded successfully!");
            })
            .catch(error => {
                toast.error("Failed to load profile. Please try again.");
                setLoading(false);
            });
    }, []);

    return (
        <div className='profile-container'>
            {loading && <p>Loading profile...</p>}
            {
                profile && !loading &&
                <div className="profile-info">
                    <img className="profile-avatar" src={profile.avatar} alt="Profile avatar" />
                    <p>{profile.name}</p>
                    <p>{profile.email}</p>
                </div>
            }
            <ToastContainer />
        </div>
    );
}

export default Profile;
