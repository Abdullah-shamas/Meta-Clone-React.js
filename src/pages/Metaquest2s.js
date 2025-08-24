import { useState } from "react"
import { Link } from "react-router-dom";
export default function Metaquest2s(){
 const Product=[
    {
        id: 1,
        description:"XBox Wireless Controller",
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=2155704541602377&version=1751901485&transcode_extension=webp"
    },
    {
        id: 2,
        description:"Meta Quest Elite Strap" ,
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=906092388019557&version=1730760909&transcode_extension=webp" 
    },
     {
        id: 3,
        description: "Meta Quest Charging Doc",
        img:"https://lookaside.fbsbx.com/elementpath/media/?media_id=1984767085317394&version=1726128057&transcode_extension=webp"  
    },
     {
        id: 4,
        description:"Meta Quest Facial Interface" ,
        img:  "https://lookaside.fbsbx.com/elementpath/media/?media_id=1944574362669432&version=1751637458&transcode_extension=webp"
    },
     {
        id: 5,
        description:"Meta Quest Lenses" ,
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=529723776804026&version=1741046838&transcode_extension=webp" 
    },
     {
        id: 6,
        description:"Compact Carrying Case Meta 2S" ,
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=408755272320770&version=1752079150&transcode_extension=webp" 
    },
     {
        id: 7,
        description:"Logitech MS Ink Mixed" ,
        img:  "https://lookaside.fbsbx.com/elementpath/media/?media_id=409949991586253&version=1727990261&transcode_extension=webp"
    },
     {
        id: 8 ,
        description:"Meta Quest Link Cable" ,
        img:  "https://lookaside.fbsbx.com/elementpath/media/?media_id=1170071054286135&version=1751487597&transcode_extension=webp"
    }
 ]   
const  [selected,setSelected] = useState(null);
    return(
<>
<section className="relative">
    
        <img className="w-full h-auto" src="https://scontent.flhe2-3.fna.fbcdn.net/v/t15.5256-10/486513689_9914368848600854_1492054572461436901_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=282d23&_nc_ohc=DZEZ2tUqqpoQ7kNvwG_9Ci2&_nc_oc=AdlCC2PfO9IE_QHOfG7pciPVyM6wcjFqBWj7pZzvZd0PtpqTfGrEkhGtRW7nyrmdddA&_nc_zt=23&_nc_ht=scontent.flhe2-3.fna&_nc_gid=HdhMKcB72AEAEWGI4NHgUw&oh=00_AfU2aNTZrN2wVyQLNYiahVRmpHvAnsSeBvVUTjg3CXkoDQ&oe=68AF97EE"/>

    <div className="absolute items-center inset-0 flex justify-center text-center z-10">
        <h1 className="font-bold text-3xl text-white">Meta Quest 2S <br/> Unreal Device. Unreal Price</h1>
    </div>
</section>

<div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  py-[150px]">
{Product.map((p)=> (
    <div key={p.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
    <img src={p.img} className="w-full h-48 object-cover " />
    <p className="text-gray-600 mt-2 text-sm text-center">{p.description}</p>
    <button onClick={()=> setSelected(p)}  className="text-center mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Try
    </button>
    </div>
))}
</div>


{
    selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-xl w-full relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-xl font-bold"
            >
              ✕
            </button>
            <img src={selected.img}  className="w-full h-64 object-cover rounded" />
            
            <p className=" text-center text-gray-700 mt-2">{selected.description}</p>
            <button className="  mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
    )
}
<section className="py-5 bg-gray-50">
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
    )
}