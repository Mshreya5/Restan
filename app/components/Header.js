"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header>
      
      <div className="bg-[#a57b46] text-white flex items-center gap-5 px-3 py-1 text-xs">
        <div className="flex items-center gap-2">
          <img 
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75" 
            alt="Phone Icon" 
            className="w-5"
          />
          <span>+4733378901</span>
        </div>
        
        <div className="flex items-center gap-2">
          <img 
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F7.png&w=128&q=75" 
            alt="Email Icon"
            className="w-5"
          />
          <span>food@restan.com</span>
        </div>
      </div>

    
      <nav className="text-black dark:text-white flex justify-between items-center px-10 py-4 bg-white dark:bg-black">
        
       
        <div>
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            alt="RESTAN Logo" 
            className="w-48 h-auto"
          />
        </div>

       
        <div className="hidden lg:flex gap-20">
          <div className="cursor-pointer hover:text-[#a57b46]" onClick={() => router.push('/')}>
            Home▾
          </div>
          <div className="cursor-pointer hover:text-[#a57b46]">
            Pages▾
          </div>
          <div className="cursor-pointer hover:text-[#a57b46]" onClick={() => router.push('/menu')}>
            Menu▾
          </div>
          <div className="cursor-pointer hover:text-[#a57b46]" onClick={() => router.push('/blog')}>
            Blog▾
          </div>
          <div className="cursor-pointer hover:text-[#a57b46]" onClick={() => router.push('/shop')}>
            Shop▾
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-5">
          
        
          <div 
            className="relative w-11 h-11 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black text-lg cursor-pointer hover:bg-[#a57b46]"
          >
            🛒
            <div className="absolute top-0 right-0 bg-[#b88a58] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </div>
          </div>

        
          <div 
            className="hidden md:block bg-[#b88a58] text-white font-bold px-6 py-2 rounded-full cursor-pointer hover:bg-[#9a6f45]"
          >
            Reservation
          </div>
        </div>
      </nav>
    </header>
  );
}
