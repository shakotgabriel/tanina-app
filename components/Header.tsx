// components/Header.tsx
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-xl">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-5 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/LOGO2.png" 
                alt="Tanina Logo" 
                width={52} 
                height={72} 
              />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-bold text-green-700 hover:text-gray-900 hover:bg-green-200 focus:outline-none focus:text-gray-900 focus:bg-green-600 transition duration-150 ease-in-out">Home</Link>
            <Link href="/about" className="ml-4 px-3 py-2 rounded-md text-sm font-bold text-green-700 hover:text-gray-900 hover:bg-green-200 focus:outline-none focus:text-gray-900 focus:bg-green-600 transition duration-150 ease-in-out">About</Link>
            <div className="ml-4 relative">
              <button 
                className="px-3 py-2 rounded-md text-sm font-bold text-green-700 hover:text-gray-900 hover:bg-green-200 focus:outline-none focus:text-gray-900 focus:bg-green-600 transition duration-150 ease-in-out"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
              </button>
              {isServicesOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                  <div className="py-1 rounded-md bg-white shadow-xl">
                    <Link href="/services/personal" className="block px-4 animate-pulse py-2 text-sm text-green-900 hover:bg-green-100">Personal</Link>
                    <Link href="/services/business" className="block px-4 animate-pulse py-2 text-sm text-green-900 hover:bg-green-100">Business</Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/contacts" className="ml-4 px-3 py-2 rounded-md text-sm font-bold text-green-700 hover:text-green-900 hover:bg-green-200 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Contacts</Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/login" className="px-3 py-2 rounded-md text-sm font-bold text-green-900 hover:text-white hover:bg-black  ">Log In</Link>
            <Link href="/signup" className="ml-4 px-3 py-2 rounded-md text-sm font-bold text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out">Sign Up</Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Home</Link>
          <Link href="/about" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">About</Link>
          <Link href="/services" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Services</Link>
          <Link href="/contacts" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Contacts</Link>
          <Link href="/login" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Log In</Link>
          <Link href="/signup" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;