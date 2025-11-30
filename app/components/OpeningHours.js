"use client";

export default function OpeningHours() {
  return (
    <section className="relative bg-white dark:bg-black px-4 sm:px-6 lg:px-8">
      
      <div className="absolute left-50 top-30">
        <h1 className="hidden md:block text-7xl lg:text-8xl font-light text-gray-200 dark:text-white opacity-50">
  RESTAN
</h1>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-2 items-center lg:items-start">
          
          <div
  className="w-full md:w-1/2  ml-0 md:ml-20 mt-10 md:mt-60  h-[220px] sm:h-[260px] md:h-[550px] lg:h-[400px] rounded-2xl overflow-hidden ">
  <iframe
    src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&mute=1&loop=1&playlist=F3zw1Gvn4Mk&controls=0&modestbranding=1"
    className="w-full h-full rounded-xl"
    title="YouTube player"
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
</div>


          <div className="w-full lg:w-1/2 lg:-ml-20 lg:mt-8">
            <div className="bg-white dark:bg-neutral-900 shadow-2xl rounded-xl p-8 mt-30 sm:p-10 relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Opening Hours</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm leading-relaxed">
                A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Sunday To Tuesday:</span>
                  <span className="mx-3 flex-1 border-b border-dotted border-gray-300 dark:border-gray-600"></span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">10:00 - 09:00</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Wednesday To Thursday:</span>
                  <span className="mx-3 flex-1 border-b border-dotted border-gray-300 dark:border-gray-600"></span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">11:30 - 10:30</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Friday & Saturday:</span>
                  <span className="mx-3 flex-1 border-b border-dotted border-gray-300 dark:border-gray-600"></span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">10:30 - 12:00</span>
                </div>
              </div>
             
              <button 
                className="bg-yellow-600 px-3 py-1 rounded-full "
              >
                <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"/>
              </button>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Call Anytime</p>
                  <a href="tel:+964733378901" className="text-lg font-bold text-gray-900 dark:text-white hover:text-[#8b7355]">
                    +964733-378901
                  </a>
                </div>
              </div>
              
              <img 
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F4.png&w=3840&q=75" 
                alt="Utensils decoration" 
                className="absolute -right-8 -bottom-8 w-64 opacity-20 pointer-events-none" 
              />
            </div>
          </div>
        
     
    </section>
  );
}