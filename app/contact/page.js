"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import OpeningHours from "../components/OpeningHours";


export default function ContactPage() {
  
  return (
    <div className="font-sans bg-black text-white">
      <Header />

      <header className="relative text-center py-[150px] px-5 bg-black overflow-hidden">
        
        <img
          src="https://www.shutterstock.com/image-photo/japanese-seafood-sushi-on-black-260nw-412326955.jpg"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        
        <div className="relative z-10">
          <h1 className="heading text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-sm">⌂ Home › Contact</p>
        </div>
      </header>


      <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          
          <div className="border border-gray-300 dark:border-neutral-700 rounded-lg p-6 bg-white dark:bg-neutral-900 shadow-sm">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=640&q=75"
              alt="Phone"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Hotline</h3>
            <p className="text-gray-600 dark:text-gray-300">+4733378901</p>
          </div>

          
          <div className="border border-gray-300 dark:border-neutral-700 rounded-lg p-6 bg-white dark:bg-neutral-900 shadow-sm">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75"
              alt="Location"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              55 Main Street, The Grand Avenue 2nd Block, New York City
            </p>
          </div>

          
          <div className="border border-gray-300 dark:border-neutral-700 rounded-lg p-6 bg-white dark:bg-neutral-900 shadow-sm">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75"
              alt="Email"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Official Email</h3>
            <p className="text-gray-600 dark:text-gray-300">info@restan.com</p>
          </div>
        </div>
      </section>

  
      <section className="bg-gray-100 dark:bg-black py-16 px-6 flex flex-col items-center">
        <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-8 w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
            Send Us a Message
          </h2>

          <form className="flex flex-col gap-4">
            
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 text-black dark:text-white placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 text-black dark:text-white placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 text-black dark:text-white placeholder-gray-500"
              />
            </div>

            
            <textarea
              placeholder="Your Message"
              className="w-full p-3 h-40 border border-gray-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 text-black dark:text-white placeholder-gray-500"
            ></textarea>

           
            <div className="flex justify-center mt-4">
              <button
                type="button"
                className="bg-yellow-600 text-white px-8 py-3 rounded-full hover:bg-yellow-700 transition"
              >
                Get In Touch
              </button>
            </div>
          </form>
        </div>
      </section>

      <OpeningHours />
      <Footer />
    </div>
  );
}
