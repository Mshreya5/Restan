"use client";

import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function BlogStandard() {
  const navigate = useRouter();

  
  return (
    <div className="font-sans">
      <Header />

     
      <header className="text-center py-[150px] px-5 bg-[url('https://www.shutterstock.com/image-photo/japanese-seafood-sushi-on-black-260nw-412326955.jpg')] bg-cover bg-center text-white">
        <h1 className="text-4xl font-bold mb-3">Blog Standard</h1>
        <p className="text-sm">⌂ Home › blog-standard</p>
      </header>

     
      <section className="bg-white dark:bg-black py-16 flex flex-col items-center gap-8">
        
        <div className="w-3/4 flex flex-col rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-900">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75"
            alt="Burger"
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <div className="flex gap-5 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>📅 12 August, 2024</span>
              <span>👤 John Baus</span>
            </div>
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              New Brussels Sprouts Burger Recipe
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
              We tried something different with Brussels sprouts in our burger
              and honestly, it turned out pretty great. Worth a try if you are
              feeling adventurous.
            </p>
            <button className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-2 rounded-full transition">
              Read More
            </button>
          </div>
        </div>

      
        <div className="w-3/4 flex flex-col rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-900">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75"
            alt="Sustainable Kitchen"
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <div className="flex gap-5 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>📅 15 August, 2024</span>
              <span>👤 Chef Maria</span>
            </div>
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              Sustainable Kitchen Practices
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
              We have been working on being more eco-friendly in the kitchen —
              sourcing locally, reducing waste, that sort of thing. Small steps
              but they add up.
            </p>
            <button className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-2 rounded-full transition">
              Read More
            </button>
          </div>
        </div>

      
        <div className="w-3/4 flex flex-col rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-900">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75"
            alt="Cooking Tips"
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <div className="flex gap-5 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>📅 18 August, 2024</span>
              <span>👤 Chef Antonio</span>
            </div>
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              Chefs Special Cooking Tips
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
              Our head chef shares some of the tricks we use to make food taste
              better. Simple stuff you can try at home.
            </p>
            <button className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-2 rounded-full transition">
              Read More
            </button>
          </div>
        </div>

       
        <div className="flex justify-center items-center gap-2 my-12">
          <button
            disabled
            className="w-10 h-10 border border-gray-300 rounded-md bg-gray-100 text-gray-400 flex items-center justify-center "
          >
            🚫
          </button>

          <button className="w-10 h-10 border border-gray-300 rounded-md bg-yellow-700 text-white font-bold hover:bg-yellow-800 transition">
            1
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-md bg-white text-black font-bold hover:bg-gray-100 transition">
            2
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-md bg-white text-black font-bold hover:bg-gray-100 transition">
            3
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-md bg-white text-black font-bold hover:bg-gray-100 transition">
            4
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-md bg-white text-black font-bold hover:bg-gray-100 transition">
            5
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition">
            »
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
