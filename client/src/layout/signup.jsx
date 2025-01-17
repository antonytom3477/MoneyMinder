// SignUp.jsx
import React, { useState } from 'react';

import user_icon from '../assets/person-bounding-box.svg'
import email_icon from '../assets/envelope-at.svg'
import password_icon from '../assets/lock.svg'

function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // You can send this data to your backend API for further processing
    };

    return (
        <div className='w-[30%] h-[85%] bg-white rounded-lg shadow-lg flex flex-row '>
            <div className='header'>
                <div className='text-center p-10 text-3xl'>MoneyMinder</div>
            </div>
            <div className='items-center flex flex-col justify-center mb-8'>
                <div className=' p-5 flex items-center space-x-5  w-fit'>
                    <img src={user_icon} alt="" classname='w-30 h-30' />
                    <input type="text" name="" id="" className=' border-4 border-gray-200 rounded-md p-1 focus:border-black-500' placeholder='Enter Name' />
                </div>
                <div className=' p-5 flex items-center space-x-5  w-fit'>
                    <img src={email_icon} alt="" />
                    <input type="email" name="" id="" className='border-4 border-gray-200 rounded-md p-1' placeholder='Enter E-mail' />
                </div>
                <div className=' p-5 flex items-center space-x-5  w-fit'>
                    <img src={password_icon} alt="" />
                    <input type="password" name="" id="" className='border-4 border-gray-200 rounded-md p-1' placeholder='Enter Password' />
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button className='rounded-full bg-gray-200 p-4 px-6 hover:bg-gray-400  transition duration-200 ease-in-out'>Sign-Up</button>
            </div>
        </div>

    );
}

export default SignUp;
