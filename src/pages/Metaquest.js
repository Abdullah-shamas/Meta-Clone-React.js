import { Link } from "react-router-dom";

export default function MetaQuest() {
  return (
    <section className="bg-white text-black">
     
      <div className="relative">
        <img
          className="w-full h-64 sm:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
          src="https://i.imgur.com/2nCt3Sbl.jpg"
          alt="Meta Quest Hero"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
            Experience the Future with Meta Quest
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-200 max-w-2xl">
            Step into new worlds, play amazing games, and explore endless
            possibilities with Meta Quest.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              to="/shop"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition"
            >
              Shop Now
            </Link>
            <Link
              to="/learn"
              className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg shadow-lg font-semibold transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

     
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-6">
        {[
          {
            img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1212867420030268&version=1752567331&transcode_extension=webp",
            title: "Meta Quest Pro",
          },
          {
            img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=482278464759507&version=1742998958&transcode_extension=webp",
            title: "Meta Quest 2",
          },
          {
            img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1069558337847743&version=1730103018&transcode_extension=webp",
            title: "Quest Accessories",
          },
          {
            img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=506273455145033&version=1751921873&transcode_extension=webp",
            title: "Quest Apps",
          },
          {
            img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1529671570979745&version=1738831591&transcode_extension=webp",
            title: "Quest Support",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:scale-105"
          >
            <img
              className="w-full h-40 object-cover"
              src={item.img}
              alt={item.title}
            />
            <div className="p-4 text-center">
              <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      
      <div className="mt-16 max-w-5xl mx-auto px-6">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-6">
          Discover Meta Quest in Action
        </h2>
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/coStBqD-OyA"
            title="Meta Quest Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      
      <div className="mt-16 bg-gray-900 text-white py-12 px-6 text-center">
        <h2 className="text-xl sm:text-3xl font-bold mb-4">
          Stay Updated with Meta Quest
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
          Subscribe to get the latest news, offers, and updates directly in your
          inbox.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-black"
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
