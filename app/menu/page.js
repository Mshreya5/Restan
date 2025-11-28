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
        <h1 className="heading text-5xl font-bold mb-3">Food Menu</h1>
        <p className="text-sm">⌂ Home › Menu</p>
      </div>

      
      <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
     
          <div className="lg:w-1/2">
            <img
              src="https://restan-nextjs.vercel.app/assets/img/banner/10.jpg"
              alt="Main dish"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
       
          <div className="lg:w-1/2">
            <h2 className="heading text-3xl font-bold mb-6">Main Dishes</h2>
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

      
    
      <section  className="bg-white dark:bg-black text-black dark:text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          <div className="md:w-1/2">
            <h2 className="heading text-3xl font-bold mb-6">Desserts</h2>
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

     <div className="flex flex-row">
      <div className="bg-[url('/images/dark-bg.jpg')] bg-cover bg-center py-24 px-10 text-white">
        <div className="bg-black bg-opacity-90 p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="heading text-5xl font-bold mb-6 leading-tight">
            30 MINUTES <br /> DELIVERY!
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.<br/>
            The Patio Time Bar opens in the center of Florence. The only bar inspired<br/>
            by the 1960s — an experience you’ll never forget.
          </p>
          <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold px-8 py-3 rounded-lg">
            🛒 Order Now
          </button>
        </div>
        </div>
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=1920&q=75"
         width={300} height={300} />
      </div>

      <section className="py-16 px-6 bg-white dark:bg-black text-black dark:text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center justify-center mb-4">
              <p className="text-sm text-[#c7a46b] uppercase tracking-widest">Fresh From Ocean</p>
            </div>
            <h2 className="heading text-5xl font-bold text-center lg:text-left mb-8">Sea Food</h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=160&h=160&fit=crop" alt="Salmon" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">Salmon Fry</h4>
                    <p className="text-sm text-gray-500">Ricotta / Goat Cheese / Beetroot</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-3 justify-end mb-2">
                    <button className="border px-3 py-1 rounded">Half</button>
                    <button className="border px-3 py-1 rounded">Full</button>
                  </div>
                  <div>
                    <span className="font-bold text-lg">$40</span>
                    <span className="text-gray-500 ml-3">$80</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Extra Free Juice</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=160&h=160&fit=crop" alt="Pangasius" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">Pangasius or Basa</h4>
                    <p className="text-sm text-gray-500">Atlantic / Chips / Salad / Tartare</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-3 justify-end mb-2">
                    <button className="border px-3 py-1 rounded">Half</button>
                    <button className="border px-3 py-1 rounded">Full</button>
                  </div>
                  <div>
                    <span className="font-bold text-lg">$15</span>
                    <span className="text-gray-500 ml-3">$30</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Extra Free Juice</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center mb-4">
              <p className="text-sm text-[#c7a46b] uppercase tracking-widest">Drinks & Wine</p>
            </div>
            <h2 className="heading text-5xl font-bold text-center lg:text-left mb-8">Beverage</h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=160&h=160&fit=crop" alt="Wine" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">Wine</h4>
                    <p className="text-sm text-gray-500">Ricotta / Goat Cheese / Beetroot</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-3 justify-end mb-2">
                    <button className="border px-3 py-1 rounded">Half</button>
                    <button className="border px-3 py-1 rounded">Full</button>
                  </div>
                  <div>
                    <span className="font-bold text-lg">$34</span>
                    <span className="text-gray-500 ml-3">$65</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Extra Free Juice</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=160&h=160&fit=crop" alt="Coffee" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">Coffee</h4>
                    <p className="text-sm text-gray-500">Atlantic / Chips / Salad / Tartare</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-3 justify-end mb-2">
                    <button className="border px-3 py-1 rounded">Half</button>
                    <button className="border px-3 py-1 rounded">Full</button>
                  </div>
                  <div>
                    <span className="font-bold text-lg">$45</span>
                    <span className="text-gray-500 ml-3">$90</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Extra Free Juice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="py-20 px-6 bg-[#f9f7f3] text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading text-5xl font-bold text-center mb-12">Our Customers Feedback</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=640&q=75" 
              alt="Customers" className="w-full rounded-[32px] shadow-lg object-cover" />
</div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-yellow-600 text-xl">★★★★★</div>
                <div className="text-gray-500">(5/5)</div>
              </div>
              <h3 className="heading text-4xl font-bold">The best food ever</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                “Targeting consultation discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve.”
              </p>
              <p className="text-gray-600 font-semibold">— Alex Morgan, Regular Customer</p>
            </div>
          </div>
        </div>
      </section>

      
      <div className="bg-neutral-900 text-white py-20 px-10 flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/2 space-y-6">
          <h2 className="heading text-4xl font-bold">Reserve Your Favorite Table</h2>
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
