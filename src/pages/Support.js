
import { Link } from "react-router-dom";

export default function Support() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-32 px-6 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Support Center</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We’re here to help you with any issues, questions, or feedback. 
          Browse FAQs, contact us, or submit a support request.
        </p>
      </div>

      
      <div className="max-w-5xl mx-auto py-12 px-6 flex-1">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-5 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <h3 className="font-semibold">How do I reset my password?</h3>
            <p className="text-gray-600 mt-1">
              Go to your account settings and click on <span className="font-medium">"Reset Password"</span>. 
              You will receive an email with reset instructions.
            </p>
          </div>

          <div className="p-5 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <h3 className="font-semibold">Where can I track my orders?</h3>
            <p className="text-gray-600 mt-1">
              You can track orders under the <span className="font-medium">"My Orders"</span> section in your dashboard.
            </p>
          </div>

          <div className="p-5 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <h3 className="font-semibold">How do I contact support?</h3>
            <p className="text-gray-600 mt-1">
              You can fill out the form below or email us at 
              <a href="mailto:support@example.com" className="text-blue-600 ml-1 underline">
                support@example.com
              </a>.
            </p>
          </div>
        </div>
      </div>

      
      <div className="bg-white py-16 px-6 shadow-inner">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

    
      <div className="text-center py-6 bg-gray-50">
        <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
    </section>
  );
}
