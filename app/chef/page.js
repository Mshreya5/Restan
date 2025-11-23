"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Chefs from "../components/Chefs";

export default function Chef(){
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
                <h1 className="heading text-5xl font-bold mb-3">Restaurant Chef</h1>
                <p className="text-sm">⌂ Home › Chefs</p>
              </div>

              <div className="text-center mt-10 mb-8 sm:mb-14">
        <p className="text-[#c7a46b] font-semibold tracking-wide mb-2 text-sm sm:text-base">MASTER CHEFS</p>
        <h2 className="heading text-2xl text-[#17120b] sm:text-3xl md:text-4xl lg:text-5xl font-bold">Meet Our Special Chefs</h2>
      </div>

              <Chefs />
              <Chefs />
              <Footer />
        </div>
    );
}