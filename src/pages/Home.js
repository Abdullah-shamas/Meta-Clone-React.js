import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
     
      {/* Hero Section with Image */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          className="w-full h-full object-cover scale-105 transform transition-transform duration-1000 hover:scale-110"
          src="https://tse2.mm.bing.net/th/id/OIP.htTJDOegeY0rkwRJCDPeWgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" 
          alt="AI Glasses Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex flex-col items-center justify-center text-center transition-all">
          <h1 className="text-white text-6xl font-extrabold mb-4 drop-shadow-lg">
            Discover AI Glasses
          </h1>
          <p className="text-gray-200 text-lg mb-6 max-w-xl">
            Experience the future of augmented reality with Meta’s next-gen
            wearable technology.
          </p>
          <Link
            to="/Ai-glasses/1"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-xl"
          >
            Shop Now
          </Link>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-800">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.eht8OiP0ILIZ4gXzcV58JwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="AI Glasses"
                className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AI Glasses</h3>
                <p className="text-gray-600 mb-4">
                  See the world in a whole new way with AI-powered lenses.
                </p>
                <Link className="text-blue-600 hover:underline font-medium" to="/Ai-glasses/1">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://th.bing.com/th/id/OIP.JVMH0MhvCS7I_CCbkqP9mgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Quest VR"
                className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Meta Quest</h3>
                <p className="text-gray-600 mb-4">
                  Immersive VR experience with cutting-edge performance.
                </p>
                <Link className="text-blue-600 hover:underline font-medium" to="/Metaquest">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.k_ZlcCZRFEj-ijN7dvcAlwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Smart Devices"
                className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Smart Devices</h3>
                <p className="text-gray-600 mb-4">
                  Stay connected with innovative smart home solutions.
                </p>
                <Link className="text-blue-600 hover:underline font-medium" to="/Metaquest">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="relative bg-gray-100 text-black py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">The Future is Here</h2>
          <p className="text-black-300 text-lg mb-8">
            Meta’s technology brings people closer, enhances creativity, and
            connects the world.
          </p>
          <Link
            to="/support"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-xl"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
