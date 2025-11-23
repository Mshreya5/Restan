"use client";

export default function Chefs() {
  return (
    <div className="bg-white dark:bg-[#111111] text-black dark:text-gray-100 py-10 sm:py-20 px-4 sm:px-6 lg:px-16">


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 justify-items-center">
   
        <div className="relative flex flex-col items-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-2 sm:border-4 border-[#c7a46b] overflow-hidden hover:bg-gray-800 transition">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop&crop=face"
              alt="Chef 1"
              className="object-cover w-full h-full hover:opacity-80 transition"
            />
          </div>
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#c7a46b] py-2 sm:py-3 px-4 sm:px-6 rounded-lg w-40 sm:w-48 md:w-52 text-center shadow-lg">
            <h3 className="text-base sm:text-lg font-semibold">Alexander Petllo</h3>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-white/90">Assistant Chef</p>
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-2 sm:border-4 border-[#c7a46b] overflow-hidden hover:bg-gray-800 transition">
            <img
              src="https://th.bing.com/th/id/OIP.7O06zAQd6DwjeKoSwknwbAAAAA?w=147&h=108&c=7&bgcl=bf00c6&r=0&o=6&cb=ucfimg1&dpr=1.5&pid=13.1&ucfimg=1"
              alt="Chef 2"
              className="object-cover w-full h-full hover:opacity-80 transition"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#c7a46b] py-2 sm:py-3 px-4 sm:px-6 rounded-lg w-40 sm:w-48 md:w-52 text-center shadow-lg">
            <h3 className="text-base sm:text-lg font-semibold">Mendia Juxef</h3>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-white/90">Burger King</p>
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-2 sm:border-4 border-[#c7a46b] overflow-hidden hover:bg-gray-800 transition">
            <img
              src="https://th.bing.com/th/id/OIP.fadjg0SE4tTVXyNTIPhsmAHaE8?w=150&h=108&c=7&bgcl=a36774&r=0&o=6&cb=ucfimg1&dpr=1.5&pid=13.1&ucfimg=1"
              alt="Chef 3"
              className="object-cover w-full h-full hover:opacity-80 transition"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#c7a46b] py-2 sm:py-3 px-4 sm:px-6 rounded-lg w-40 sm:w-48 md:w-52 text-center shadow-lg">
            <h3 className="text-base sm:text-lg font-semibold">Petro William</h3>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-white/90">Main Chef</p>
          </div>
        </div>
      </div>
    </div>
  );
}
