"use client";

export default function OpeningHours() {
  return (
    <section className="bg-white dark:bg-black py-8 sm:py-16 px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-8">
      
     
      <div className="flex-1 flex justify-center">
        <img
          src="https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?cs=srgb&dl=spoon-dark-sugar-1028714.jpg&fm=jpg"
          alt="Opening Hours"
          className="w-64 sm:w-80 lg:w-auto h-auto max-w-full"
        />
      </div>

      
      <div className="flex-1 w-full">
        <article className="bg-white dark:bg-neutral-900 shadow-lg rounded-xl p-6 sm:p-8">
          
        
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Opening Hours
          </h2>
          
          
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Drop by for some good food and drinks in a relaxed setting. We have got live music most evenings and we are right downtown.
          </p>

          
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            
            <div className="flex justify-between text-gray-800 dark:text-gray-200 text-sm sm:text-base">
              <span className="font-semibold">Sunday To Tuesday:</span>
              <span className="border-b border-gray-300 dark:border-gray-600 flex-1 mx-2 sm:mx-4" aria-hidden="true"></span>
              <span className="font-medium">10:00 AM - 09:00 PM</span>
            </div>
            
            <div className="flex justify-between text-gray-800 dark:text-gray-200 text-sm sm:text-base">
              <span className="font-semibold">Wednesday To Thursday:</span>
              <span className="border-b border-gray-300 dark:border-gray-600 flex-1 mx-2 sm:mx-4" aria-hidden="true"></span>
              <span className="font-medium">11:30 AM - 10:30 PM</span>
            </div>
            
            <div className="flex justify-between text-gray-800 dark:text-gray-200 text-sm sm:text-base">
              <span className="font-semibold">Friday & Saturday:</span>
              <span className="border-b border-gray-300 dark:border-gray-600 flex-1 mx-2 sm:mx-4" aria-hidden="true"></span>
              <span className="font-medium">10:30 AM - 12:00 AM</span>
            </div>
          </div>

          
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            <div className="bg-[#c7a46b] p-3 sm:p-4 rounded-full flex-shrink-0" aria-hidden="true">
              <img 
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75" 
                alt="Phone icon" 
                className="w-5 h-5 sm:w-6 sm:h-6" 
              />
            </div>
            
            
            <div>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Call Anytime
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                <a href="tel:+964733378901" className="hover:text-[#c7a46b] transition-colors">
                  +964 733-378901
                </a>
              </h3>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}