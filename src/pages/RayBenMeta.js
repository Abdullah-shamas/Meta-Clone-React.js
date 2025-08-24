
import { useState } from "react";
import { Link } from "react-router-dom";
export default function RayBanMetaGallery() {
  const products = [
    {
      id: 1,
      name: "Ray-Ban Meta Wayfarer (Clear)",
      description: "Classic Wayfarer smart glasses, clear lens.",
      img: "https://scontent.flhe2-4.fna.fbcdn.net/v/t39.8562-6/482030673_1266444904449810_2871134102746664192_n.webp?_nc_cat=110&ccb=1-7&_nc_sid=9a942e&_nc_ohc=XhrXhlkZtaQQ7kNvwFYH0GW&_nc_oc=AdkH4cWhfymsQuk8z6-Z8aOkzRZSohr3H0vqk-7Jwi3jnJQ0oPPB32NOtmguRwRZbT4&_nc_zt=14&_nc_ht=scontent.flhe2-4.fna&_nc_gid=w0PmDlCKKgVUeh1aNVA4CA&oh=00_AfVbFcmfCI3yVtc9NJX6wOqTAWgGmTzhMQWvUqw365EpJA&oe=68ACFC36"
    },
    {
      id: 2,
      name: "Ray-Ban Meta Sunglasses Style",
      description: "Smart sunglasses with bold frame.",
      img: "https://scontent.flhe2-3.fna.fbcdn.net/v/t39.8562-6/513249934_1469637687532595_5182399917028624858_n.webp?_nc_cat=107&ccb=1-7&_nc_sid=9a942e&_nc_ohc=VYB-NLhDgTAQ7kNvwHhmEsT&_nc_oc=Adn2vwdmXNrtQde4vBFsM0BLbPOH9vE1Zua6Qn7UA7JGq3PdR5yRpO2xH9hvsqmwI-U&_nc_zt=14&_nc_ht=scontent.flhe2-3.fna&_nc_gid=w0PmDlCKKgVUeh1aNVA4CA&oh=00_AfVQRkM5Gu8fpqlBZuMpEGJy17EoZ07f1pJ63slHUOWutA&oe=68AD20E3"
    },
    {
      id: 3,
      name: "Ray-Ban Meta in Action",
      description: "Lifestyle view wearing smart glasses.",
      img: "https://scontent.flhe2-3.fna.fbcdn.net/v/t39.8562-6/498947229_1461480355213031_2407640938540017254_n.webp?_nc_cat=105&ccb=1-7&_nc_sid=9a942e&_nc_ohc=xUv8DqepZu8Q7kNvwHvYOZy&_nc_oc=AdkHpjdLmmg-8kt3lt1wPyrQhg7gs541d3caS05nugLl4W7qnl21P1qwkAoRuOWyM2c&_nc_zt=14&_nc_ht=scontent.flhe2-3.fna&_nc_gid=w0PmDlCKKgVUeh1aNVA4CA&oh=00_AfWyrZK3rKipDW8QCYWaHw2s_42Wy5i9SNK3Szu1j58PtA&oe=68AD0812"
    },
    {
      id: 4,
      name: "Ray-Ban Meta Angled View",
      description: "Close-up of frame and lens angle.",
      img: "https://scontent.flhe2-2.fna.fbcdn.net/v/t39.8562-6/499491152_1078854810817950_8709708130836828668_n.webp?_nc_cat=100&ccb=1-7&_nc_sid=9a942e&_nc_ohc=0bBvivUXV6IQ7kNvwFCrId1&_nc_oc=AdkgxzOWHQqPflvmDHOa8hs30kkVn8atpdxGN94jhOY4q_MmyZbqvyDzwNczg1H6cys&_nc_zt=14&_nc_ht=scontent.flhe2-2.fna&_nc_gid=w0PmDlCKKgVUeh1aNVA4CA&oh=00_AfVKguETGl_4Tczs9QGZgHd-xuXviHGCYCTakUjfDzbbgA&oe=68AD0264"
    },
    {
      name: "Ray-Ban Meta Skyler",
      description: "Angular glases thin",
      img: "https://scontent.flhe2-4.fna.fbcdn.net/v/t39.8562-6/483941065_524321510705626_4389566863479534043_n.webp?_nc_cat=110&ccb=1-7&_nc_sid=9a942e&_nc_ohc=_CIUjeV3FsQQ7kNvwFo9wj1&_nc_oc=AdmWsFrRGhyf8uoCDcWighSJ-D6n89BeLC7M0_2QDptyGoLgMEwF_2TR89iPy80bloE&_nc_zt=14&_nc_ht=scontent.flhe2-4.fna&_nc_gid=w0PmDlCKKgVUeh1aNVA4CA&oh=00_AfUAcbV5RDJ0SZVwvJsFOU3ZKt-iRXhkGOmjxBG4u4lKew&oe=68ACFB1D"  
    },
    {
              name: "Ray-Ban Wayfarer",
      description: "Smart glasses black color",
      img: "https://scontent.flhe2-4.fna.fbcdn.net/v/t39.8562-6/483902215_1337152070946946_937716411975899546_n.webp?_nc_cat=111&ccb=1-7&_nc_sid=9a942e&_nc_ohc=pq7GuoRxAFsQ7kNvwFPLbnw&_nc_oc=AdnfY-hLD1pjvv3iVUtQhX6fvdSvH0_3Aqn354Dlbpm7Y058HpuqtIo9qQ0SaTgFMnw&_nc_zt=14&_nc_ht=scontent.flhe2-4.fna&_nc_gid=w0PmDlCKKgVUeh1aNVA4CA&oh=00_AfVp5CC6C_kHxokqWr-GPp2XcybwBdRkk0cQ_1yF3yLt9w&oe=68AD0881"
    },
    {
              name: "Ray-Ban Meta Skyler",
      description: "Pashtoon ai glasses",
      img: "https://scontent.flhe2-4.fna.fbcdn.net/v/t39.8562-6/484036527_2273432283058231_179598348016296573_n.webp?_nc_cat=110&ccb=1-7&_nc_sid=9a942e&_nc_ohc=7sMSr6cVbc0Q7kNvwFEAHk6&_nc_oc=Adl8uCZrhGSXklBiqK2qdpfiiKruOz7afI8S1u0sldnLsYmVgTLWTef1p3Xw7En5VOc&_nc_zt=14&_nc_ht=scontent.flhe2-4.fna&_nc_gid=w0PmDlCKKgVUeh1aNVA4CA&oh=00_AfXPtw2R1nJerDcFYRPaYbTHgEEqgJHQLhhOMUuix7hzSw&oe=68ACEB12"
    },
    {
          name: "Ray-Ban Meta Skyler",
      description: "Meta special ray ben",
      img: "https://scontent.flhe2-2.fna.fbcdn.net/v/t39.8562-6/482031480_2764432320394081_7420328633235150300_n.webp?_nc_cat=101&ccb=1-7&_nc_sid=9a942e&_nc_ohc=Sa75rQVzHikQ7kNvwFh-g7w&_nc_oc=Adn5KbQeKyRMW0Gt-iSmT8HQ8hJzoRJtRTDlJTIBSnFZIppu4UkKE-Deg9MMeQSmUec&_nc_zt=14&_nc_ht=scontent.flhe2-2.fna&_nc_gid=w0PmDlCKKgVUeh1aNVA4CA&oh=00_AfXZSnLI8pGW9IFZ3vG7XtJaHtAOQ4kuSPpOpC5kuhcgzw&oe=68ACF1BA"
    }
  ];

  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="">
          <div className="py-[100px] bg-gray-100 pb-[200px]">
                <h1 className="text-5xl text-center ">Find the right pair of <br/>AI glasses for you</h1>
            <p className="text-center text-2xl mt-4">Discover AI glasses that blend cutting-edge technology with iconic style.</p>
            </div>

           
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{p.name}</h2>
                <p className="text-gray-600 mt-2 text-sm">{p.description}</p>
                <button
                  onClick={() => setSelected(p)}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Try
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-xl w-full relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-xl font-bold"
            >
              ✕
            </button>
            <img src={selected.img} alt={selected.name} className="w-full h-64 object-cover rounded" />
            <h3 className="text-2xl font-semibold mt-4">{selected.name}</h3>
            <p className="text-gray-700 mt-2">{selected.description}</p>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      )}
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
