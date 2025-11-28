"use client";
import { useRouter } from "next/navigation";
import Footer from "./components/Footer";
import OpeningHours from "./components/OpeningHours";
import Chefs from "./components/Chefs";

export default function Home() {
  const navigate = useRouter();

 
  const foodCategories = ["Main Dishes", "Desserts", "Sea Food", "Beverage"];
  
  const dishes = [
    {
      name: "Braised Chicken Legs",
      desc: "4 Chicken Legs • Chili Sauce • Soft Drinks",
      price: "$34",
      originalPrice: "$35",
      rating: 4.9,
      reviews: "5.7K",
      img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=500&fit=crop"
    },
    {
      name: "Bone Steak",
      desc: "4 Chicken Legs • Chili Sauce • Soft Drinks",
      price: "$18",
      originalPrice: "$25",
      rating: 4.2,
      reviews: "3.1K",
      img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop"
    },
    {
      name: "Fish Tacos with Chipotle Crema",
      desc: "4 Chicken Legs • Chili Sauce • Soft Drinks",
      price: "$12",
      originalPrice: "$18",
      rating: 4.8,
      reviews: "6.7K",
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=1920&q=75"
    },
    {
      name: "Grilled Salmon",
      desc: "Fresh salmon with lemon butter sauce",
      price: "$28",
      originalPrice: "$35",
      rating: 4.7,
      reviews: "4.2K",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop"
    },
    {
      name: "Pasta Carbonara",
      desc: "Classic Italian pasta with creamy sauce",
      price: "$16",
      originalPrice: "$22",
      rating: 4.6,
      reviews: "3.8K",
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=500&fit=crop"
    },
    {
      name: "Chocolate Dessert",
      desc: "Rich chocolate cake with vanilla cream",
      price: "$8",
      originalPrice: "$12",
      rating: 4.9,
      reviews: "7.1K",
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black text-white dark:text-gray-100">
   
      <header
        className="relative h-auto bg-cover bg-center bg-gray-800"
        style={{
          backgroundImage:
            "url('https://www.foodchow.com/_next/image?url=%2Fforwhom%2Fbnr-img.jpg&w=3840&q=75')",
        }}
      >
       
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-3 text-white text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-2 sm:mb-0">
            <div>Phone: +4733378901</div>
            <div>Email: food@restan.com</div>
          </div>
          <div className="hidden lg:block text-center sm:text-right">
            175 10h Street, Office 375 Berlin, De 21562
          </div>
        </div>
        <div className="h-[2px] w-full bg-white opacity-100"></div>

      
        <nav className="relative z-10 flex justify-between items-center px-4 sm:px-10 py-5 text-white">
        
          <div className="hidden lg:flex gap-30 xl:gap-20 text-base lg:text-lg">
            <div className="relative group cursor-pointer">
  Home▾
  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible">
    <div className="py-2">

      <div
        onClick={() => navigate.push("/")}
        className="px-4 py-2 bg-white hover:bg-gray-200 text-black cursor-pointer"
      >
        Home Page 1
      </div>

      <div
        onClick={() => navigate.push("/")}
        className="px-4 py-2 bg-white hover:bg-gray-200 text-black cursor-pointer"
      >
        Home Page 2
      </div>
    </div>
  </div>
</div>


 <div className="relative group cursor-pointer">
  Pages▾
  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
    <div className="py-2">

      <div onClick={() => navigate.push("/about")} className="px-4 py-2 bg-white hover:bg-gray-200 text-black cursor-pointer">
        About Us
      </div>

      <div onClick={() => navigate.push("/chef")} className="px-4 py-2 bg-white hover:bg-gray-200 text-black cursor-pointer">
        Chef
      </div>

      <div onClick={() => navigate.push("/contact")} className="px-4 py-2 bg-white hover:bg-gray-200 text-black cursor-pointer">
        Contact Us
      </div>

    
    </div>
  </div>
</div>
 <div className="relative group cursor-pointer">
  Menu▾

  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
    <div className="py-2">

      <div
        onClick={() => navigate.push("/menu")}
        className="px-4 py-2 bg-white hover:bg-gray-200 text-black cursor-pointer"
      >
        Menu Style One
      </div>

      <div
        onClick={() => navigate.push("/menu")}
        className="px-4 py-2 bg-white hover:bg-gray-200 text-black cursor-pointer"
      >
        Dark Version
      </div>

    </div>
  </div>
</div>

          <div className="text-2xl font-bold flex items-center gap-2">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
              alt="logo"
              className="h-10"
            />
          </div>

          
          <div className="relative group cursor-pointer">
  Blog▾
  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
    <div className="py-2">

      <div
        onClick={() => navigate.push("/blog")}
        className="px-4 py-2 bg-white hover:bg-gray-200 text-black cursor-pointer"
      >
        Blog Standard
      </div>
      <div
        onClick={() => navigate.push("/blog")}
        className="px-4 py-2 bg-white hover:bg-gray-200 text-black cursor-pointer"
      >
        Dark Version
      </div>

    </div>
  </div>
</div>


           <div className="relative group cursor-pointer">
  Shop▾
  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
    <div className="py-2">

      <div
        onClick={() => navigate.push("/shop")}
        className="px-4 py-2 bg-white hover:bg-gray-200 text-black cursor-pointer"
      >
        Shop
      </div>

      <div
        onClick={() => navigate.push("/shop")}
        className="px-4 py-2 bg-white hover:bg-gray-200 text-black cursor-pointer"
      >
        Dark Version
      </div>

    </div>
  </div>
</div>
            <div 
  className="cursor-pointer"
  onClick={() => navigate.push("/contact")}
>
  Contact Us
</div>
          </div>
        </nav>
      </header>

     
      <section className="relative h-[650px] flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.foodchow.com/_next/image?url=%2Fforwhom%2Fbnr-img.jpg&w=3840&q=75')",
        }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="heading text-4xl sm:text-6xl md:text-7xl font-bold mb-8">Best Restaurant</h1>
          <div className="flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-yellow-300 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
              BEST FOOD SINCE 1865
            </div>
          </div>
        </div>
      </section>


     
<div className="relative flex flex-col md:flex-row justify-center items-start bg-white dark:bg-black text-black dark:text-white py-20 px-10 md:px-20">


  <div className="absolute -top-32 z-20 w-full md:w-[350px] left-1/2 -translate-x-1/2 md:left-20 md:-translate-x-0 bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-2xl">
    <div className="absolute -top-6 left-6 z-30">
      <div className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-3xl">
        🍴
      </div>
    </div>
    <h2 className="text-3xl font-semibold mb-6 text-center">Book a Table</h2>

    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Phone"
        className="p-3 rounded-md bg-blue-50 dark:bg-neutral-950 text-gray-700 "
      />
      <select className="p-3 rounded-md bg-blue-50  dark:bg-neutral-950 text-gray-700 ">
        <option>1 Person</option>
        <option>2 Person</option>
        <option>3 Person</option>
        <option>4 Person</option>
        <option>5 Person</option>
      </select>
      <input
        type="date"
        className="p-3 rounded-md bg-blue-50 dark:bg-neutral-950 text-gray-700 "
      />
      <select className="p-3 rounded-md bg-blue-50 dark:bg-neutral-950 text-gray-700 ">
        <option>10:00 AM</option>
        <option>11:00 AM</option>
        <option>12:00 PM</option>
        <option>1:00 PM</option>
        <option>2:00 PM</option>
      </select>

      <button className="bg-yellow-800 py-3 text-white rounded-md font-semibold">
        Book A Table
      </button>
    </div>
  </div>

 
  <div className="relative z-10 w-full md:ml-[420px] mt-[100px] md:mt-0 flex flex-col justify-end">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
      <h2 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
        <span>🔥</span>Our Popular Category
      </h2>

      
      <div className="flex gap-2">
        <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center bg-yellow-600">
          ◂
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center bg-yellow-600">
          ▸
        </button>
      </div>
    </div>

    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      
      <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden w-full">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F28.jpg&w=1920&q=75"
          alt="Hot Chocolate"
          className="w-full h-32 sm:h-40 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-yellow-400">Beverage</p>
          <h3 className="text-lg sm:text-xl font-semibold text-white">Hot Chocolate</h3>
        </div>
      </div>

    
      <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden w-full">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F25.jpg&w=1920&q=75"
          alt="Chicken Alfredo"
          className="w-full h-32 sm:h-40 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-yellow-400">Main Dishes</p>
          <h3 className="text-lg sm:text-xl font-semibold text-white">Chicken Alfredo</h3>
        </div>
      </div>

      
      <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden w-full">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F26.jpg&w=1920&q=75"
          alt="Cheesecakes"
          className="w-full h-32 sm:h-40 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-yellow-400">Desserts</p>
          <h3 className="text-lg sm:text-xl font-semibold text-white">Cheesecakes</h3>
        </div>
      </div>
    </div>
  </div>
  
</div>


  <div className="bg-white dark:bg-black text-black dark:text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="grid md:grid-cols-3 gap-10 divide-x divide-gray-200 dark:divide-gray-600">
            <div className="px-6">
              <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75"
               alt="Quality Foods" className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Foods</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                We source locally when we can and cook everything from scratch.
              </p>
            </div>

            <div className="px-6">
              <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75" 
              alt="Fast Delivery" className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Hot food delivered fast - usually within 30 minutes.
              </p>
            </div>

            <div className="px-6">
              <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=640&q=75"
               alt="recipes" className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Delicious Recipes</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Family recipes we have been perfecting for decades.
              </p>
            </div>
          </div>
        </div>
      </div>


<div
  className="w-[90%] max-w-7xl flex flex-col md:flex-row justify-between items-center bg-[#f7c873] rounded-[50px] overflow-hidden my-20 mx-auto px-10 md:px-20 py-16"
  style={{
    backgroundImage: "url('https://restan-nextjs.vercel.app/assets/img/shape/bg-texture.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  
  <div className="relative flex-1 flex justify-center items-center mb-10 md:mb-0">
    
    <div className="relative">
      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75"
        alt="Main Dish"
        className="w-80 h-80 rounded-full object-cover shadow-2xl"
      />

     
      <div className="absolute top-6 -right-10 bg-white w-28 h-28 rounded-full flex flex-col items-center justify-center text-black font-bold ">
        <span className="text-sm">Save</span>
        <span className="text-3xl">55%</span>
      </div>
    </div>

   
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=1080&q=75"
      alt="Food 2"
      className="absolute bottom-0 left-10 w-32 h-32 rounded-full object-cover"
    />
  </div>

 
  <div className="flex-1 text-center md:text-left text-black">
    <p className="text-lg font-semibold mb-3 tracking-wide">TODAY SPECIAL OFFER</p>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
      Explore <br /> Irresistible <br /> Promotions!
    </h2>
    <p className="text-base md:text-lg text-gray-800 mb-8 max-w-lg mx-auto md:mx-0">
      Were running some great deals right now on popular dishes.
      Perfect time to try something new or get your usual favorites for less.
    </p>
    <button className="bg-[#5a4429] text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition">
      Order Today
    </button>
  </div>
</div>

      <div className="bg-white dark:bg-black text-black dark:text-gray-100">
        <section className="py-20 px-6 md:px-20">
          <div className="text-center mb-10">
            <p className="text-yellow-400 uppercase tracking-widest text-sm mb-2">
              Food Menu
            </p>
            <h2 className="heading text-4xl font-bold mb-6">Our Specials Menu</h2>
            <div className="border-2 border-white rounded-lg p-2 max-w-2xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {foodCategories.map((category, idx) => {
                  let buttonStyle = "px-6 py-3 rounded-md text-lg ";
                  if (idx === 0) {
                    buttonStyle += "bg-yellow-700 text-white";
                  } else {
                    buttonStyle += "bg-white text-black dark:bg-black dark:text-white";
                  }
                  return (
                    <button key={category} className={buttonStyle}>
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {dishes.map((dish, i) => {
              return (
                <div key={i} className="bg-white dark:bg-neutral-900 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow">
                 
                  <div className="relative">
                    <img src={dish.img} alt={dish.name} className="w-full h-56 object-cover" />
                  </div>
                  
            
                  <div className="p-6">
                   
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500 font-bold">★ {dish.rating}</span>
                        <span className="text-gray-500 text-sm">({dish.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through text-sm">{dish.originalPrice}</span>
                        <span className="text-black dark:text-white font-bold text-lg">{dish.price}</span>
                      </div>
                    </div>
           
                    <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{dish.name}</h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{dish.desc}</p>
                    
                 
                    <button className="w-full border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-4 py-3 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition font-semibold">
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>


<div className="bg-white py-24 flex justify-center">
        <div className="bg-[#111111] dark:bg-neutral-900 text-white dark:text-gray-100 rounded-3xl px-8 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between w-[90%] max-w-[1200px] shadow-2xl">
          
          <div className="flex justify-center mb-10 md:mb-0">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75"
              alt="App Preview"
              className="w-[350px] md:w-[400px] rounded-2xl"
            />
          </div>

          
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Are you Ready to <br /> Start your online Order?
            </h2>

            <p className="text-gray-300 mb-8 text-sm md:text-base">
              Order ahead with our app and skip the line. You can customize everything
              and see exactly when your food will be ready. Plus app users get first dibs on specials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#f4f4f4] text-black hover:bg-[#000000] hover:text-white border-2 transition px-6 py-3 rounded-full font-semibold">
               App Store
              </button>
              <button className="bg-[#5a4110] hover:bg-[#f0ece5] hover:text-black transition px-6 py-3 rounded-full font-semibold">
                Play Store
              </button>
            </div>
          </div>
        </div>
      </div>
<OpeningHours />

<div className="text-center mt-10 mb-8 sm:mb-14">
        <h1 className="text-[#c7a46b] dark:text-amber-500 font-semibold tracking-wide mb-2 text-sm sm:text-base">MASTER CHEFS</h1>
        <h2 className="heading text-2xl dark:text-amber-50 text-[#17120b] sm:text-3xl md:text-4xl lg:text-5xl font-bold">Meet Our Special Chefs</h2>
      </div>
<Chefs />


      <div className="py-20 px-6 text-center bg-white dark:bg-black text-black dark:text-white">
        <div className="mb-10">
          <h4 className="text-[#bfa26f] uppercase tracking-widest text-sm mb-2">
            News & Blog
          </h4>
          <h2 className="text-4xl font-semibold">Our Latest News & Blog</h2>
        </div>

        
        <div className="flex flex-wrap justify-center gap-8">
         
          <div className="relative w-[380px]">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"
              alt="Blog 1"
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#1b1b1b] rounded-xl p-6 text-left shadow-lg w-[320px]">
              <p className="text-xs text-gray-400 mb-2">
                BY MD SOHAG • BURGER, FOOD
              </p>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Picked up a Brussels burger Sprouts with ham
              </h3>
              <button className=" text-white px-6 py-2 rounded-lg font-semibold ">
                READ MORE →
              </button>
            </div>
          </div>

          
          <div className="relative w-[380px]">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"
              alt="Blog 2"
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#1b1b1b] rounded-xl p-6 text-left shadow-lg w-[320px]">
              <p className="text-xs text-gray-400 mb-2">
                BY MD SOHAG • BURGER, FOOD
              </p>
              <h3 className="text-xl font-semibold mb-3 text-white">
                This prefabricated passive house is highly sustainable
              </h3>
              <button className=" text-white px-6 py-2 rounded-lg font-semibold">
                READ MORE →
              </button>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}