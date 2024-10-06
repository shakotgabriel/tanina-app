"use client";

import { useState } from 'react';
import Image from 'next/image';

const SignupForm: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add logic to handle the signup, like API calls
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto font-sans p-6">
      <div className="text-center mb-16">
        <a href="/">
          <Image
            src="/images/removebg-preview.png"
            alt="logo"
            width={400}
            height={252}
            className="inline-block"
          />
        </a>
        <h4 className="text-gray-800 text-base font-semibold mt-6">
          Sign up into your account
        </h4>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-8">
          {/* First Name */}
          <div>
            <label className="text-gray-800 text-sm mb-2 block">First Names</label>
            <input
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-green-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter first name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
            <input
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-green-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter last name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-800 text-sm mb-2 block"> ID /Passport Number</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-green-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter email"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
            <input
              name="mobile"
              type="text"
              value={formData.mobile}
              onChange={handleChange}
              className="bg-green-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter mobile number"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-green-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="bg-green-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Confirm password"
            />
          </div>
        </div>

        <div className="mt-12">
          <button
            type="submit"
            className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-green-600 hover:bg-blackfocus:outline-none"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
