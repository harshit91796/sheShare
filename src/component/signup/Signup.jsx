import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

function Signup() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const username = e.target.username.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;

        const data = {
            username,
            email,
            phone
        };

        try {
            const response = await axios.post('http://localhost:3000/createUser', data);
            console.log('Response:', response.status);
            if (response.status === 200) {
                console.log('User created successfully');
                setLoading(false);
                toast.success('User Created Successfully');
                navigate('/users');
            } else {
                console.log('Failed to create user');
                toast.error('Email or phone number already exists');
                setLoading(false);
            }
        } catch (error) {
            console.error('Error creating user:', error);
            toast.error('Failed to create user');
            setLoading(false);
        }
    };

    return (
        <div className='container flex flex-col justify-center items-center mt-10'>
            <Toaster toastOptions={{ duration: 4000 }} />
            <div className='form-container max-w-md w-full bg-purple-200 p-8 rounded-lg shadow-lg'>
                <form className='form flex flex-col gap-4 items-center' onSubmit={handleSubmit}>
                    <div className='form-control flex flex-col'>
                        <label htmlFor="username" className='text-lg mb-1'>Username</label>
                        <input required className='input' type="text" id="username" placeholder='Enter your username' />
                    </div>
                    <div className='form-control flex flex-col'>
                        <label htmlFor="email" className='text-lg mb-1'>Email</label>
                        <input required className='input' type="email" id="email" placeholder='Enter your email' />
                    </div>
                    <div className='form-control flex flex-col'>
                        <label htmlFor="phone" className='text-lg mb-1'>Phone</label>
                        <input required minLength={10} maxLength={10} className='input' type="text" id="phone" placeholder='Enter your phone no.' />
                    </div>
                    <button className='btn bg-indigo-50 hover:bg-purple-800 hover:text-white text-purple-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                        {loading ? 'Loading...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
