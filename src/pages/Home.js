import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
     
      
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
        <img
          className="w-full h-full object-cover scale-105 transform transition-transform duration-1000 hover:scale-110"
          src="https://tse2.mm.bing.net/th/id/OIP.htTJDOegeY0rkwRJCDPeWgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" 
          alt="AI Glasses Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Discover AI Glasses
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 max-w-xl">
            Experience the future of augmented reality with Meta’s next-gen
            wearable technology.
          </p>
          <Link
            to="/Ai-glasses/1"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-xl text-sm sm:text-base"
          >
            Shop Now
          </Link>
        </div>
      </section>

     
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-800">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.eht8OiP0ILIZ4gXzcV58JwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="AI Glasses"
                className="w-full h-48 sm:h-56 md:h-64 object-cover transform transition-transform duration-500 hover:scale-110"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">AI Glasses</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  See the world in a whole new way with AI-powered lenses.
                </p>
                <Link className="text-blue-600 hover:underline font-medium text-sm sm:text-base" to="/Ai-glasses/1">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://th.bing.com/th/id/OIP.JVMH0MhvCS7I_CCbkqP9mgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Quest VR"
                className="w-full h-48 sm:h-56 md:h-64 object-cover transform transition-transform duration-500 hover:scale-110"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Meta Quest</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Immersive VR experience with cutting-edge performance.
                </p>
                <Link className="text-blue-600 hover:underline font-medium text-sm sm:text-base" to="/Metaquest">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.k_ZlcCZRFEj-ijN7dvcAlwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Smart Devices"
                className="w-full h-48 sm:h-56 md:h-64 object-cover transform transition-transform duration-500 hover:scale-110"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Smart Devices</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Stay connected with innovative smart home solutions.
                </p>
                <Link className="text-blue-600 hover:underline font-medium text-sm sm:text-base" to="/Metaquest">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="relative bg-gray-100 text-black py-20 sm:py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">The Future is Here</h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-8">
            Meta’s technology brings people closer, enhances creativity, and
            connects the world.
          </p>
          <Link
            to="/support"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-xl text-sm sm:text-base"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
