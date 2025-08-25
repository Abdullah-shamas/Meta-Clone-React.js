// src/pages/Support.jsx
import { Link } from "react-router-dom";

export default function Support() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800">
      
      <div className="bg-gray-100 text-black py-[250px] px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Support Center</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We’re here to help you with any issues, questions, or feedback. 
          Browse FAQs, contact us, or submit a support request.
        </p>
      </div>

      
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold">How do I reset my password?</h3>
            <p className="text-gray-600">
              Go to your account settings and click on "Reset Password". 
              You will receive an email with reset instructions.
            </p>
          </div>

          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold">Where can I track my orders?</h3>
            <p className="text-gray-600">
              You can track orders under the "My Orders" section in your dashboard.
            </p>
          </div>

          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold">How do I contact support?</h3>
            <p className="text-gray-600">
              You can fill out the form below or email us at 
              <a href="mailto:support@example.com" className="text-blue-600 ml-1 underline">
                support@example.com
              </a>.
            </p>
          </div>
        </div>
      </div>

      
      <div className="bg-white py-12 px-6 shadow-inner">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      
      <div className="text-center py-6">
        <Link to="/" className="text-blue-600 underline">← Back to Home</Link>
      </div>
    </section>
  );
}
