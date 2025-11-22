"use client";

import { useRouter } from "next/navigation";


export default function Footer() {
  const router = useRouter();

  return (
    <div className="bg-black text-white px-8 py-14">

      
      <div className="bg-gray-900 rounded-2xl shadow-lg p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          
          <div>
            <h2 className="text-2xl font-semibold mb-3">About Us</h2>
            <p className="text-gray-400 text-sm mb-4">
              We’re a small family restaurant serving good food, fair prices, and friendly service since 1985.
            </p>

           
            <div className="flex space-x-3">
              <button 
                className="bg-gray-700 hover:bg-yellow-600 px-3 py-1 rounded-full "
              >
                F
              </button>
              <button 
                className="bg-gray-700 hover:bg-yellow-600 px-3 py-1 rounded-full "
  
              >
                T
              </button>
              <button 
                className="bg-gray-700 hover:bg-yellow-600 px-3 py-1 rounded-full "
              >
                Y
              </button>
              <button 
                className="bg-gray-700 hover:bg-yellow-600 px-3 py-1 rounded-full "
              >
                L
              </button>
            </div>
          </div>

          
          <div>
            <h2 className="text-2xl font-semibold mb-3">Explore</h2>
            <div className="text-gray-400 flex flex-col space-y-2">
              <div className="hover:text-yellow-500 cursor-pointer">Company Profile</div>
              <div className="hover:text-yellow-500 cursor-pointer">About</div>
              <div className="hover:text-yellow-500 cursor-pointer">Help Center</div>
              <div className="hover:text-yellow-500 cursor-pointer">Career</div>
              <div className="hover:text-yellow-500 cursor-pointer">Features</div>
              <div className="hover:text-yellow-500 cursor-pointer">Contact</div>
            </div>
          </div>

        
          <div>
            <h2 className="text-2xl font-semibold mb-3">Contact Info</h2>

            <div className="text-gray-400 text-sm space-y-4">
              
              <div className="flex items-start space-x-3">
                <button 
                  className="bg-yellow-600 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center"
                  aria-label="Address"
                >
                  🏠
                </button>
                <div>
                  <p>175 10th Street, Office 375</p>
                  <p>Berlin, DE 21562</p>
                </div>
              </div>

             
              <div className="flex items-start space-x-3">
                <button 
                  className="bg-yellow-600 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center"
                  aria-label="Phone"
                >
                  📞
                </button>
                <div>
                  <p>+123 34598768</p>
                  <p>+554 34598734</p>
                </div>
              </div>

              
              <div className="flex items-start space-x-3">
                <button 
                  className="bg-yellow-600 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center"
                  aria-label="Email"
                >
                  ✉️
                </button>
                <div>
                  <p>food@restan.com</p>
                </div>
              </div>
            </div>
          </div>

          
          <div>
            <h2 className="text-2xl font-semibold mb-3">Newsletter</h2>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get updates about new dishes and offers.
            </p>

           
            <div className="flex items-center border-b border-gray-600 pb-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-white outline-none text-sm"
                aria-label="Email address for newsletter"
              />
              <button 
                className="hover:bg-white hover:text-black bg-black text-white px-2 transition-colors"
                aria-label="Subscribe to newsletter"
              >
                →
              </button>
            </div>

          
            <div className="flex items-center mt-4 space-x-2">
              <button 
                className="border border-gray-400 px-2 py-1 rounded text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Agree to privacy policy"
              >
                ✓
              </button>
              <p className="text-sm">I agree to the Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 mt-10 pt-6 text-gray-500 text-sm">
        
        
        <img 
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" 
          alt="Restaurant Logo" 
          className="w-30 h-20 mb-4 md:mb-0" 
        />

       
        <div className="text-center md:text-right">
          © Copyright 2025. Restan Restaurant. All Rights Reserved
        </div>
      </div>
    </div>
  );
}
