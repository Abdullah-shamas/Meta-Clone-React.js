import { FaMeta } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-black py-10 ">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-4 gap-8">

        
        <div>
          <div className="flex items-center font-bold text-lg">
            <FaMeta className="text-blue-600 mr-2" />
            Meta
          </div>
          <p className="mt-2 text-sm">Building the future with cutting-edge technology.</p>
        </div>

       
        <div>
          <h3 className="font-semibold mb-2">AI Glasses</h3>
          <ul className="text-sm space-y-1">
            <li><Link to="/Ai-glasses/1" className="hover:underline">About AI Glasses</Link></li>
            <li><Link to="/Ai-glasses/2" className="hover:underline">Ray-Ban Meta</Link></li>
            <li><Link to="/Ai-glasses/3" className="hover:underline">Oakley Meta</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-2">Meta Quest</h3>
          <ul className="text-sm space-y-1">
            <li><Link to="/Metaquest" className="hover:underline">Overview</Link></li>
            <li><Link to="/Metaquest/2" className="hover:underline">Meta Quest 2S</Link></li>
            <li><Link to="/Metaquest/3" className="hover:underline">Meta Quest 3S</Link></li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">📧 support@meta.com</p>
          <p className="text-sm">📞 +1 (234) 567-8901</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-600 mt-8">
        &copy; {new Date().getFullYear()} Meta Technologies. All rights reserved.
      </div>
    </footer>
  );
}
