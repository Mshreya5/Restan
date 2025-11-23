"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import OpeningHours from "../components/OpeningHours";
import Chefs from "../components/Chefs";

export default function AboutPage() {
  return (
    <div className="font-sans bg-white dark:bg-black text-white">
      <Header />

      <div
        className="text-center py-[150px] px-[20px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/japanese-seafood-sushi-on-black-260nw-412326955.jpg')",
        }}
      >
        <h1 className="heading text-5xl font-bold mb-3">About Us</h1>
        <p className="text-sm">⌂ Home › About</p>
      </div>
      <section className="bg-yellow-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-amber-900 font-serif text-2xl text-center mb-12">OUR TRUSTED 8K HAPPY PARTNER</h2>
          <div className="flex flex-row gap-8 justify-center items-center">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75" alt="Partner 1" className="w-48 h-auto"/>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75" alt="Partner 2" className="w-48 h-auto"/>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=1080&q=75" alt="Partner 3" className="w-48 h-auto"/>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=1080&q=75" alt="Partner 4" className="w-48 h-auto"/>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75" alt="Partner 5" className="w-48 h-auto"/>
          </div>
        </div>
      </section>
        
       <section className="py-20 px-6 bg-white dark:bg-black overflow-hidden">
  <div className="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    
    <div className="order-1 relative z-0">
      <div className="flex gap-6">
        <img
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=800&fit=crop"
          alt="Service 1"
          className="w-1/2 h-[400px] object-cover rounded-lg shadow-md"
        />
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"
          alt="Service 2"
          className="w-1/2 h-[400px] object-cover rounded-lg shadow-md"
        />
      </div>
    </div>

    
    <div className="order-2 relative z-10">
  
      <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-2xl p-10 lg:-ml-24 xl:-ml-48 relative">

        <div className="flex items-center gap-4 mb-2">
             <span className="text-sm text-[#c7a46b] uppercase tracking-widest font-semibold">About Us</span>
             <span className="h-[1px] w-12 bg-[#c7a46b] hidden sm:block"></span>
        </div>
        
        <h2 className="heading text-3xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
          We Invite You To <br /> Visit Our Restaurant
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
          A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time
          Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you
          a experience that you will have a hard time forgetting.
        </p>
        
        <button className="bg-[#c7a46b] hover:bg-[#b8963d] transition-colors text-white px-8 py-3 rounded font-semibold">
          Discover More
        </button>

        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F2.png&w=3840&q=75"
          alt="decor"
          className="hidden lg:block absolute -top-16 -right-10 w-40 opacity-100 pointer-events-none"
        />
      </div>
    </div>

  </div>
</section>

      <section className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <OpeningHours videoSrc="https://youtu.be/F3zw1Gvn4Mk?t=37" />
        </div>
      </section>

     
      <section className="py-20 px-6 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mt-10 mb-8 sm:mb-14">
        <h1 className="text-[#c7a46b] dark:text-amber-500 font-semibold tracking-wide mb-2 text-sm sm:text-base">MASTER CHEFS</h1>
        <h2 className="heading text-2xl dark:text-amber-50 text-[#17120b] sm:text-3xl md:text-4xl lg:text-5xl font-bold">Meet Our Special Chefs</h2>
          <Chefs />
        </div>
              </div>
      </section>
       
     <Footer />
    </div>
  );
}
