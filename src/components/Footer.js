import { FaMeta } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black py-10 border-t border-gray-300">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <div className="flex items-center font-bold text-xl">
            <FaMeta className="text-blue-600 mr-2" />
            Meta
          </div>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
            Building the future with cutting-edge technology and innovation.
          </p>
        </div>

        {/* AI Glasses */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">AI Glasses</h3>
          <ul className="text-sm space-y-2">
            <li><Link to="/Ai-glasses/1" className="hover:text-blue-600">About AI Glasses</Link></li>
            <li><Link to="/Ai-glasses/2" className="hover:text-blue-600">Ray-Ban Meta</Link></li>
            <li><Link to="/Ai-glasses/3" className="hover:text-blue-600">Oakley Meta</Link></li>
          </ul>
        </div>

        {/* Meta Quest */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Meta Quest</h3>
          <ul className="text-sm space-y-2">
            <li><Link to="/Metaquest" className="hover:text-blue-600">Overview</Link></li>
            <li><Link to="/Metaquest/2" className="hover:text-blue-600">Meta Quest 2S</Link></li>
            <li><Link to="/Metaquest/3" className="hover:text-blue-600">Meta Quest 3S</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Contact</h3>
          <p className="text-sm">
            📧 <a href="mailto:support@meta.com" className="hover:underline">support@meta.com</a>
          </p>
          <p className="text-sm mt-2">
            📞 <a href="tel:+12345678901" className="hover:underline">+1 (234) 567-8901</a>
          </p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-600 mt-10">
        &copy; {new Date().getFullYear()} Meta Technologies. All rights reserved.
      </div>
    </footer>
  );
}
