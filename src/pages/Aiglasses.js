import { Link } from "react-router-dom";

export default function Aiglasses() {
  return (
    <>
    <section className="relative w-full">
      
      <img
        className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
        src="https://up.yimg.com/ib/th/id/OIP.gqnt60Qu3CNNhZ49Z_LYbgHaE8?pid=Api&rs=1&c=1&qlt=95&w=168&h=112"
        alt="AI Glasses"
      />

     
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-3xl transition duration-500 hover:bg-black/70">
        <h1 className="font-bold transition-transform duration-500 hover:scale-110">
          AI Glasses
        </h1>
        <p className="mt-2 transition-colors duration-500 hover:text-yellow-300">
          Designer eye wear of effortless glasses
        </p>
      </div>
    </section>

<section className="py-12">
  <h1 className=" text-5xl text-center mt-12">Style that fits you. Tech that gets you.</h1>
  <p className="text-center text-2xl mt-4">From bold to low-key, tailored to sport-ready, <br/>there’s an AI glasses style for every version of you.</p>
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="relative overflow-hidden rounded-2xl shadow-lg group ">
      <img
        src="https://media.lenscrafters.com/2024/Calendar/Week_22_June/LC_Ray-Ban_Meta_2024/RB_Meta_LP/D_LP_Controls_AskMetaAI.jpg"
        alt="AI Glasses"
        className="w-full h-[500px] object-cover group-hover:scale-110 duration-500"
      />

      
      <div className="absolute inset-0 bg-black/40"></div>

     
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <Link
          to="/Ai-glasses/2"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium"
        >
          Learn more
        </Link>
      </div>
    </div>
  
  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
      <img
        src="https://tse1.mm.bing.net/th/id/OIP.Wf4qqM40Y-J37kmj8Rmh5gHaEK?pid=Api&P=0&h=220"
        alt="AI Glasses"
        className="w-full h-[500px] object-cover group-hover:scale-110 duration-500"
      />

      
      <div className="absolute inset-0 bg-black/40"></div>

     
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <Link
          to="/Ai-glasses/3"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium"
        >
          Learn more
        </Link>
      </div>
    </div>
</div>
</section >

<section className="py-12">
  <h1 className="text-center text-4xl mb-[60px]">You are in controll of your experience</h1>
   
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    <div className="text-center">
      <img 
        className="w-full h-[300px] object-cover rounded-xl" 
        src="https://lookaside.fbsbx.com/elementpath/media/?media_id=1387048695830618&version=1749546487&transcode_extension=webp" 
        alt="Meta AI app"
      />
      <h2 className="text-2xl font-bold mt-4">Meta AI app</h2>
      <p className="text-gray-600 mt-2">
        Manage your glasses and customize settings, import and share photos, 
        and interact with your personalized Meta AI assistant on both your glasses and the app.
      </p>
    </div>

    
    <div className="text-center">
      <img 
        className="w-full h-[300px] object-cover rounded-xl" 
        src="https://lookaside.fbsbx.com/elementpath/media/?media_id=1228517635316997&version=1750257002&transcode_extension=webp" 
        alt="Bystander privacy"
      />
      <h2 className="text-2xl font-bold mt-4">Bystander privacy</h2>
      <p className="text-gray-600 mt-2">
        The Capture LED lets others know when you use your glasses to take photos and record videos.
      </p>
    </div>

   
    <div className="text-center">
      <img 
        className="w-full h-[300px] object-cover rounded-xl" 
        src="https://lookaside.fbsbx.com/elementpath/media/?media_id=671072135691694&version=1749546483&transcode_extension=webp" 
        alt="Accessibility"
      />
      <h2 className="text-2xl font-bold mt-4">Accessibility</h2>
      <p className="text-gray-600 mt-2">
        AI glasses by Meta provide helpful utility for those with reduced vision, hearing or mobility.
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
