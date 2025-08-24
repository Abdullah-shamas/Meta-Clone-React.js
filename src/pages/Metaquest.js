import { Link } from "react-router-dom";

export default function Aiglasses() {
  return (
    <>
    <section className="relative w-full">
      
     <img
  className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
  src="data:image/webp;base64,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"
  alt="Meta Quest"
/>

<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white transition duration-500 hover:bg-black/70">
  <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-transform duration-500 hover:scale-110">
    This is Meta Quest
  </h1>

  <div className="flex gap-4 mt-6">
    <Link
      to="/Metaquest/2"
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm md:text-base transition duration-300"
    >
      Meta Quest 2S
    </Link>

    <Link
      to="/Metaquest/3"
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm md:text-base transition duration-300"
    >
      Meta Quest 3S
    </Link>
  </div>
</div>

    </section>

<section className="py-16 bg-gray-50">
  <h1 className="text-5xl font-bold text-center mt-12 text-gray-900">
    Style that fits you. Tech that gets you.
  </h1>
  <p className="text-center text-2xl mt-4 text-gray-600">
    From bold to low-key, tailored to sport-ready, <br /> there’s an Meta Quests style for every version of you.
  </p>

  <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 max-w-7xl mx-auto px-6">
   
    <div className="flex flex-col items-center text-center">
      <img
        src="https://lookaside.fbsbx.com/elementpath/media/?media_id=1212867420030268&version=1752567331&transcode_extension=webp"
        alt="Smart AI Glasses"
        className="w-40 h-40 object-contain mb-4 transition-transform duration-500 hover:scale-110"
      />
      <h3 className="text-lg font-semibold">Meta Quest 2S</h3>
      <p className="text-sm text-gray-500">Smart wearable with AR</p>
    </div>

    
    <div className="flex flex-col items-center text-center">
      <img
        src="https://lookaside.fbsbx.com/elementpath/media/?media_id=482278464759507&version=1742998958&transcode_extension=webp"
        alt="Futuristic Glasses"
        className="w-40 h-40 object-contain mb-4 transition-transform duration-500 hover:scale-110"
      />
      <h3 className="text-lg font-semibold">Meta Quest 3S</h3>
      <p className="text-sm text-gray-500">Next-gen style & comfort</p>
    </div>

    
    <div className="flex flex-col items-center text-center">
      <img
        src="https://lookaside.fbsbx.com/elementpath/media/?media_id=1069558337847743&version=1730103018&transcode_extension=webp"
        alt="Sports Glasses"
        className="w-40 h-40 object-contain mb-4 transition-transform duration-500 hover:scale-110"
      />
      <h3 className="text-lg font-semibold">Compare Headsets</h3>
      <p className="text-sm text-gray-500">Perfect for active lifestyle</p>
    </div>

    
    <div className="flex flex-col items-center text-center">
      <img
        src="https://lookaside.fbsbx.com/elementpath/media/?media_id=506273455145033&version=1751921873&transcode_extension=webp"
        alt="Classic Glasses"
        className="w-40 h-40 object-contain mb-4 transition-transform duration-500 hover:scale-110"
      />
      <h3 className="text-lg font-semibold">Acsessories</h3>
      <p className="text-sm text-gray-500">Timeless and elegant</p>
    </div>

    
    <div className="flex flex-col items-center text-center">
      <img
        src="https://lookaside.fbsbx.com/elementpath/media/?media_id=1529671570979745&version=1738831591&transcode_extension=webp"
        alt="Accessories"
        className="w-40 h-40 object-contain mb-4 transition-transform duration-500 hover:scale-110"
      />
      <h3 className="text-lg font-semibold">Gift Cards</h3>
      <p className="text-sm text-gray-500">Cases, lenses & more</p>
    </div>
  </div>
</section>


<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
    
    
    <div className="w-full">
      <iframe
        className="w-full h-[400px] rounded-2xl shadow-lg"
        src="https://www.youtube.com/embed/4V4CNdVm_tY"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

   
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Blend virtual objects with your physical space
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Experience next-level mixed reality with Meta Quest. Interact seamlessly
        with your environment as digital elements come alive in your real world.
      </p>
    </div>

  </div>
</section>



<section className="py-16 bg-gray-50">
  <div className="max-w-3xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get news and updates from Meta</h2>

   <Link
            to="/support"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-xl"
          >
            Learn More
          </Link>

    <p className="text-sm text-gray-600 mt-6">
      By signing up you agree to receive updates and marketing messages (e.g. email, social, etc.)
      from Meta about Meta’s existing and future products and services.
    </p>

    <p className="text-sm text-gray-600 mt-2">
      You may withdraw your consent and unsubscribe at any time by clicking the unsubscribe link
      included in our messages.
    </p>

    
  </div>
</section>


    </>
  );
}
