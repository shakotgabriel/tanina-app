"use client";

import React, { useEffect ,  useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollAnimation from '../components/scroll-animation';
import FadeinRight from '../components/fadein-right';


const countries: string[] = ['Bor', 'Aweil', 'Renk', 'Malakal', 'Wau', 'Akon', 'Rumbek', 'Bentiu' ,'Kuajok', 'Yambio', 'Torit','Juba', 'Nimule'];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (<div className='w-[50%] ml-[25%] min-h-screen '>
    
    
      




    
    <section className="bg-green-50 py-10 rounded-lg px-10 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {/* FAQ Item 1 */}
          <div className="bg-white rounded-lg shadow-2xl">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-bold text-left text-gray-900"
              onClick={() => toggleFAQ(0)}
            >
              What is Tanina?
              <span>{activeIndex === 0 ? '-' : '+'}</span>
            </button>
            {activeIndex === 0 && (
              <div className="px-4 pb-4 text-gray-700">
                Tanina is a money transfer service trusted by millions worldwide for safe, fast, and reliable transfers.
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white rounded-lg shadow-2xl">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-bold text-left text-gray-900"
              onClick={() => toggleFAQ(1)}
            >
              How do I send money?
              <span>{activeIndex === 1 ? '-' : '+'}</span>
            </button>
            {activeIndex === 1 && (
              <div className="px-4 pb-4 text-gray-700">
                You can send money using Tanina by creating an account, choosing a recipient, and selecting the amount to send.
              </div>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white rounded-lg shadow-2xl">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-bold text-left text-gray-900"
              onClick={() => toggleFAQ(2)}
            >
              What payment methods are accepted?
              <span>{activeIndex === 2 ? '-' : '+'}</span>
            </button>
            {activeIndex === 2 && (
              <div className="px-4 pb-4 text-gray-700">
                We accept various payment methods, including bank transfers, debit cards, and mobile payments.
              </div>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-white rounded-lg shadow-2xl">
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-bold text-left text-gray-900"
              onClick={() => toggleFAQ(3)}
            >
              How long does a transfer take?
              <span>{activeIndex === 3 ? '-' : '+'}</span>
            </button>
            {activeIndex === 3 && (
              <div className="px-4 pb-4 text-gray-700">
                Most transfers are completed within minutes, but the duration may vary depending on the destination country.
              </div>
            )}
          </div>
        </div>
      </div>
    </section></div>
  );
};

const Home: React.FC = () => {
  const [sendFrom, setSendFrom] = useState<string>('');
  const [sendTo, setSendTo] = useState<string>('');

  return (
    <> <ScrollAnimation>
      {/* Hero Section */}
      <div className="min-h-screen flex items-center relative" style={{
        backgroundImage: `url(/images/secure.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container flex flex-col md:flex-row items-center justify-between">
          {/* Text content */}
          <motion.div
          viewport={{ once: false }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 10, opacity: 1 }}
            transition={{ duration: 1.8 }}
            className="md:w-1/2 mr-40 ml-40 bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-xl shadow-lg"
          >
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-green-100 shadow-text">
              Send money online <br />with Tanina
            </h1>
            <p className="text-xl font-black mb-8 text-green-100 shadow-text">
              Transfer money across South Sudan instantly.
            </p>
          </motion.div>

          {/* Transfer card */}
          <ScrollAnimation>
             <div className="md:w-1/3 ml-20">
            <div className=" p-8 shadow-2xl">
              <button className="text-2xl mb-4 text-white rounded shadow-2xl">Start Your Transfer</button>
              <div className="mb-4">
                <label className="block text-white text-lg font-black mb-2 " htmlFor="sendFrom">
                  Send money from
                </label>
                <select
                  id="sendFrom"
                  value={sendFrom}
                  onChange={(e) => setSendFrom(e.target.value)}
                  className="shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Town</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-white text-lg font-black mb-2" htmlFor="sendTo">
                  Send to
                </label>
                <select
                  id="sendTo"
                  value={sendTo}
                  onChange={(e) => setSendTo(e.target.value)}
                  className="shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Town</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white font-black py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300">
                Get Started
              </button>
            </div></div>
          </ScrollAnimation>


        </div>
      </div></ScrollAnimation>

      {/* Service Cards */}
      <ScrollAnimation>


      <section className="relative bg-gradient-to-bl from-green-400 via-green-300 to-green-400 py-16 px-28  rounded-3xl mt-20 overflow-hidden">
  {/* Background Image */}
  <section
    className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
    style={{ backgroundImage: "url('/images/moneyp.jpg')" }}
  ></section>
  
  {/* Content */}
  <div className="relative z-10 container mx-auto px-8">
    <h2 className="text-4xl font-black text-center mb-20 mt-28 text-white">
      Why choose Tanina Transfer
    </h2>

<div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-4 gap-40">
  

      {/* Card 1 */}
      <div className="bg-onyx border border-black rounded-3xl p-14 shadow-2xl relative z-50  ">
        <h3 className="text-2xl font-black mb-4 text-white">Money Transfer</h3>
        <p className="text-white italic mb-4">
          Users can send funds to other Tanina users or withdraw funds to their bank accounts or mobile wallets, with real-time processing.
        </p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg text-black bg-green-200 hover:bg-white">
          Read More
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Other Cards (Same as Card 1) */}
      <div className="bg-onyx border border-black rounded-3xl p-14 shadow-2xl relative z-10">
        <h3 className="text-2xl font-black mb-4 text-white">Mobile Money Integration</h3>
        <p className="text-white italic mb-4">
          Users can link their mobile money accounts to their Tanina profiles, facilitating deposits and withdrawals between Tanina wallets and mobile money accounts.
        </p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg text-black bg-green-200 hover:bg-white">
          Read More
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Card 3 */}
      <div className="bg-onyx border border-black rounded-3xl p-14 shadow-2xl relative z-10">
        <h3 className="text-2xl font-black mb-4 text-white">Automatic Bank Account Creation</h3>
        <p className="text-white italic mb-4">
          Upon signing up, Tanina communicates with its partner bank’s API to set up a bank account, eliminating the need for manual account setup.
        </p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg text-black bg-green-200 hover:bg-white">
          Read More
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Card 4 */}
      <div className="bg-onyx border border-black rounded-3xl p-14 shadow-2xl relative z-10">
        <h3 className="text-2xl font-black mb-4 text-white">ATM withdrawal</h3>
        <p className="text-white italic mb-4">
          After linking their bank account, users can access funds through compatible ATMs across South Sudan, allowing for convenient cash access.
        </p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg text-black bg-green-200 hover:bg-white">
          Read More
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

     
     
     </ScrollAnimation>
      
  















      {/* FAQ Section */}
      
      <ScrollAnimation>
      <FAQSection /></ScrollAnimation>



<footer className="text-black font-black text-base  " id='footer'>
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-start">
      {/* Logo Section */}
      <div className="lg:h-[100px] md:h-[50px] max-md:mt-8 mb-8 md:mb-0">
        <a href="/">
          <Image
            src="/images/LOGO2.png"
            width={400}
            height={350}
            className="max-md:w-4/5 mx-auto"
            alt="Tanina Logo"
          />
        </a>
      </div>

      {/* Quick Links Section */}
      <div className="mb-8 md:mb-0">
        <h5 className="text-base font-semibold  ">Quick Links</h5>
        <ul className="space-y-2">
          <li>
            <a href="#" className=" hover:text-green-600 transition duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className=" hover:text-green-600 transition duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className=" hover:text-green-600 transition duration-300">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className=" hover:text-green-600 transition duration-300">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className=''>
        <h5 className="text-lg font-semibold  ">Contact Us</h5>
        <p className="">Email: support@tanina.com</p>
        <p className="">Phone: +1 234 567 890</p>
      </div>
    </div>

    <div className="  text-center">
      <p className=" text-sm">
        &copy; {new Date().getFullYear()} Tanina. All Rights Reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-gray-600 hover:text-green-600 transition duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm1.6 18.4h-3.2v-5.6h3.2v5.6zm-1.6-6.4c-1.1 0-2.2-.9-2.2-2.2s1.1-2.2 2.2-2.2 2.2.9 2.2 2.2-.9 2.2-2.2 2.2z" />
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-green-600 transition duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.2 4.6c-.8.4-1.6.6-2.5.8.9-.5 1.6-1.3 1.9-2.4-.8.5-1.7.9-2.6 1.1-.8-.8-2-1.4-3.2-1.4-2.4 0-4.3 2-4.3 4.3 0 .3 0 .7.1 1.1-3.6-.2-6.8-1.8-8.9-4.3-.4.7-.5 1.5-.5 2.3 0 1.6.8 3.1 2.1 4-.8 0-1.6-.2-2.3-.6v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.9.2-1.4.2-.4 0-.7 0-1.1-.1.7 2.1 2.6 3.6 4.9 3.6-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.7 2.2 7.4 2.2 8.9 0 13.7-7.4 13.7-13.8 0-.2 0-.5 0-.7.9-.6 1.6-1.5 2.2-2.4z" />
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-green-600 transition duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 5.4 4.4 9.8 9.8 9.8s9.8-4.4 9.8-9.8c0-5.4-4.4-9.8-9.8-9.8zm0 18.3c-4.7 0-8.5-3.8-8.5-8.5 0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5c0 4.7-3.8 8.5-8.5 8.5zm4.8-11.6c-.3-.4-.8-.6-1.3-.6-.3 0-.7.1-1 .2-.3.1-.6.3-.8.6-.3.4-.4.9-.2 1.4l2.6 6.4c.2.5.8.8 1.4.6.5-.2.8-.8.6-1.4l-2.5-6.4c.1-.5.1-.9-.2-1.2zm-5.6-.6c-1.1 0-2.2.8-2.6 2-.4 1.2-.2 2.4.3 3.2.5.8 1.4 1.2 2.5 1.2 1.1 0 2-.8 2.6-2 .5-1.2.3-2.4-.3-3.2-.6-.8-1.5-1.2-2.5-1.2z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>





    </>
  );
};

export default Home;
