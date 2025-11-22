"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function MenuPage() {
  
  const [phoneNum, setPhoneNum] = useState("");
  const [guestCount, setGuestCount] = useState("3 Person");
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("12:00 PM");

  
  const mainDishes = [
    {
      name: "Chicken Alfredo",
      desc: "Creamy sauce with grilled chicken and parmesan",
      offer: "Comes with free drink",
      half: "$20",
      full: "$40",
    },
    {
      name: "Fish & Chips",
      desc: "Crispy battered fish with fries and tartar sauce",
      offer: "Comes with free drink",
      half: "$36",
      full: "$70",
    },
    {
      name: "Steak Fillet",
      desc: "Grilled beef with pepper sauce and mashed potatoes",
      offer: "Comes with free drink",
      half: "$44",
      full: "$85",
    },
    {
      name: "Grilled Chicken",
      desc: "Tender chicken served with veggies and rice",
      offer: "Comes with free drink",
      half: "$20",
      full: "$40",
    },
  ];

  
  const sweetTreats = [
    {
      name: "Brownie",
      desc: "Rich chocolate brownie with ice cream",
      offer: "Free juice with order",
      half: "$15",
      full: "$25",
    },
    {
      name: "Cheesecake",
      desc: "Classic creamy cheesecake slice",
      offer: "Free juice with order",
      half: "$18",
      full: "$30",
    },
    {
      name: "Muffins",
      desc: "Freshly baked muffins with choco chips",
      offer: "Free juice with order",
      half: "$12",
      full: "$20",
    },
    {
      name: "Cupcakes",
      desc: "Soft cupcakes topped with frosting",
      offer: "Free juice with order",
      half: "$10",
      full: "$18",
    },
  ];

  
  return (
    <div className="font-sans bg-black text-white">
      <Header />

      
      <div
        className="text-center py-[150px] px-[20px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/japanese-seafood-sushi-on-black-260nw-412326955.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold mb-3">Food Menu</h1>
        <p className="text-sm">⌂ Home › Menu</p>
      </div>

      
      <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
     
          <div className="lg:w-1/2">
            <img
              src="https://restan-nextjs.vercel.app/assets/img/banner/10.jpg"
              alt="Main dish"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
       
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">Main Dishes</h2>
            {mainDishes.map((dish, i) => (
              <div key={i} className="mb-6 border-b pb-4">
                <h3 className="text-xl font-semibold">{dish.name}</h3>
                <p className="text-sm">{dish.desc}</p>
                <p className="text-sm text-gray-500">{dish.offer}</p>
                <p className="mt-1 text-sm">
                  Half: {dish.half} | Full: {dish.full}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    
      <section className="bg-gray-50 dark:bg-neutral-900 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">Desserts</h2>
            {sweetTreats.map((item, i) => (
              <div key={i} className="mb-6 border-b pb-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-sm">{item.desc}</p>
                <p className="text-sm text-gray-500">{item.offer}</p>
                <p className="mt-1 text-sm">
                  Half: {item.half} | Full: {item.full}
                </p>
              </div>
            ))}
          </div>
          <div className="md:w-1/2">
            <img
              src="https://restan-nextjs.vercel.app/assets/img/banner/11.jpg"
              alt="Dessert"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

     
      <div className="bg-[url('/images/dark-bg.jpg')] bg-cover bg-center py-24 px-10 text-white">
        <div className="bg-black bg-opacity-90 p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            30 MINUTES <br /> DELIVERY!
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.
            The Patio Time Bar opens in the center of Florence. The only bar inspired
            by the 1960s — an experience you’ll never forget.
          </p>
          <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold px-8 py-3 rounded-lg">
            🛒 Order Now
          </button>
        </div>
      </div>

      
      <div className="bg-[#f9f7f3] text-black flex flex-col md:flex-row justify-between items-center py-20 px-10 gap-10">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
            alt="Customer"
            className="w-full rounded-3xl"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">Our Customers Feedback</h2>
          <p className="text-yellow-600 text-xl">★★★★★</p>
          <h3 className="text-2xl font-semibold">Really good food, fair prices</h3>
          <p className="text-gray-600 text-sm">
            “Been coming here for years and they never disappoint. The staff knows what they are
            doing and the food is consistently good. Its become our go-to place for family dinners.”
          </p>
        </div>
      </div>

      
      <div className="bg-neutral-900 text-white py-20 px-10 flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Reserve Your Favorite Table</h2>
          <p className="text-gray-400">
            A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.
            The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s,
            giving you an unforgettable experience.
          </p>

          <div className="flex items-center gap-8 mt-6">
            <div>
              <h4 className="font-bold text-lg">Lunch Menu</h4>
              <p className="text-gray-400 text-sm">30+ items</p>
            </div>
            <div className="h-10 border-l border-gray-500"></div>
            <div>
              <h4 className="font-bold text-lg">Dinner Menu</h4>
              <p className="text-gray-400 text-sm">50+ items</p>
            </div>
          </div>
        </div>

        <div className="md:w-2/5 bg-neutral-800 p-6 rounded-lg space-y-5">
          <div>
            <label className="text-sm text-gray-400">Phone</label>
            <input
              type="text"
              placeholder="+4733378901"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              className="w-full bg-neutral-900 text-white p-2 rounded-md mt-1 border border-neutral-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Person</label>
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              className="w-full bg-neutral-900 text-white p-2 rounded-md mt-1 border border-neutral-700"
            >
              <option>1 Person</option> 
              <option>2 Person</option>
              <option>3 Person</option>
              <option>4 Person</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-400">Date</label>
            <input
              type="date"
              value={reservationDate}
              onChange={(e) => setReservationDate(e.target.value)}
              className="w-full bg-neutral-900 text-white p-2 rounded-md mt-1 border border-neutral-700"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Time</label>
            <input
              type="time"
              value={reservationTime}
              onChange={(e) => setReservationTime(e.target.value)}
              className="w-full bg-neutral-900 text-white p-2 rounded-md mt-1 border border-neutral-700"
            />
          </div>

          <button className="w-full bg-yellow-700 hover:bg-yellow-800 text-white py-3 rounded-md font-semibold">
            Reserve Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
