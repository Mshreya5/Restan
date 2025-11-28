"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Shop() {

 
  const menuImages = {
    pizza: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=640&q=75",
    burger: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=640&q=75",
    steak: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75",
    sandwich: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F4.png&w=640&q=75",
    pasta: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=640&q=75",
    salmon: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F6.png&w=640&q=75",
   shawarma: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F7.png&w=1080&q=75",
    salad: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F8.png&w=640&q=75"
  };

  
  const shopItems = [
    { img: menuImages.pizza, name: "Pizza", title: "Classic Margherita", price: "$12.00", id: 1 },
    { img: menuImages.burger, name: "Burger", title: "Gourmet Beef Burger", price: "$8.00", id: 2 },
    { img: menuImages.steak, name: "Steak", title: "Grilled Ribeye", price: "$14.00", id: 3 },
    { img: menuImages.sandwich, name: "Sandwich", title: "Club Sandwich", price: "$8.00", id: 4 },
    { img: menuImages.pasta, name: "Pasta", title: "Creamy Alfredo", price: "$25.00", id: 5 },
    { img: menuImages.salmon, name: "Salmon", title: "Pan-Seared Salmon", price: "$18.00", id: 6 },
    { img: menuImages.shawarma, name: "Meat, Shawarama", title: "Chicken Shawarama", price: "$3.00", id: 7 },
    { img: menuImages.salad, name: "Salad", title: "Fresh Caesar Salad", price: "$6.00", id: 8 },
  ];

  
  return (
    <div>
      <Header />

      <header className="relative text-white text-center py-[150px] px-5 bg-gray-900 dark:bg-black">
        <img
          src="https://www.shutterstock.com/image-photo/japanese-seafood-sushi-on-black-260nw-412326955.jpg"
          alt="Colorful spices and ingredients background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10">
          <h1 className="heading text-5xl font-bold mb-3">Special Food</h1>
          <p className="text-sm">⌂ Home › Shop</p>
        </div>
      </header>

    
      <div className="flex justify-between items-center mt-4 px-5">
        <div className="flex gap-2">
          <button className="w-10 h-10 border border-gray-300 dark:border-gray-600 flex items-center justify-center rounded text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-yellow-800 hover:text-white">
            ⊞
          </button>
          <button className="w-10 h-10 border border-gray-300 dark:border-gray-600 flex items-center justify-center rounded text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-yellow-800 hover:text-white">
            ◫
          </button>
        </div>
        <div className="flex items-center gap-4">
        <p className="text-gray-600">Showing 1-8 of 20 results</p>
        
        <select className="p-3 rounded-md bg-white dark:bg-neutral-950 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 outline-none min-w-[180px]">
          <option>Sort by Latest</option>
          <option>Sort by Price</option>
          <option>Sort by Popular</option>
          <option>Sort by Rating</option>
        </select>
      </div>
      </div>

      
      <div className="flex flex-wrap justify-center gap-12 p-20">
        {shopItems.map((item) => {
          return (
            <div key={item.id} className="border-2 border-gray-300 dark:border-white rounded-lg p-5 w-[200px] bg-white dark:bg-black shadow-lg dark:shadow-none">
              <img
                src={item.img}
                alt={item}
                className="w-full h-[150px] object-cover rounded"
              />
              <p className="text-gray-900 dark:text-white text-center mt-3 hover:text-yellow-600">{item.name}</p>
              <h3 className="text-gray-900 dark:text-white font-semibold text-lg hover:text-yellow-600">{item.title}</h3>
              <p className="text-gray-900 dark:text-white hover:text-yellow-600 font-bold">{item.price}</p>
              <button className="w-full mt-3 px-6 py-3 border-2 border-gray-300 dark:border-white text-gray-900 dark:text-white rounded-full bg-transparent hover:bg-yellow-800 hover:text-white hover:border-yellow-800">
                Add to Cart
              </button>
            </div>
          );
        })}
       
        <div className="flex justify-center items-center gap-2 my-12">
          <button
            className="w-10 h-10 border border-gray-300 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center "
          >
            🚫
          </button>

          <button className="w-10 h-10 border border-gray-300 rounded-full bg-yellow-700 text-white font-bold">
            1
          </button>
          <button className="w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold hover:bg-gray-100 ">
            2
          </button>
          <button className="w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold hover:bg-gray-100 ">
            3
          </button>
          <button className="w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white flex items-center justify-center hover:bg-gray-100">
            »
          </button>
          </div>
      </div>
      
      <Footer />
    </div>
  );
}
