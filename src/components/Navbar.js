import { useState } from "react";
import { FaMeta } from "react-icons/fa6";
import { FaSearch, FaUserCircle, FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [questdropdown, setQuestdropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="bg-gray-300 py-4 px-6 relative">
     
      <div className="flex items-center justify-between">
        
        <Link to="/" className="flex items-center font-bold text-lg">
          <FaMeta className="text-blue-600 mr-1" />
          Meta
        </Link>

       
        <div className="hidden md:flex items-center gap-10">
         
          <div
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button className="text-lg">AI Glasses</button>

            {dropdown && (
              <div className="absolute left-0 top-full bg-gray-300 shadow-md flex p-6 z-50 whitespace-nowrap">
                <div className="mr-16">
                  <h2 className="pt-2 pb-3 font-semibold">Explore</h2>
                  <Link to="Ai-glasses/1" className="block py-1">
                    About AI Glasses
                  </Link>
                  <Link to="Ai-glasses/2" className="block py-1">
                    Ray Ben Meta
                  </Link>
                  <Link to="Ai-glasses/3" className="block py-1">
                    Okelay Meta
                  </Link>
                </div>

                <div className="flex gap-6">
                  <div className="text-center">
                    <img
                      src="https://tse2.mm.bing.net/th/id/OIP.bPuxQvRm_bP0NYnoYml2lAAAAA?w=400&h=200&rs=1&pid=ImgDetMain&o=7&rm=3"
                      alt="Ray-Ban Meta"
                      className="w-48 h-auto object-cover rounded-lg"
                    />
                    <p className="mt-2 font-medium text-sm">Shop Wayfarer</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://tse3.mm.bing.net/th/id/OIP.gcUJBGPS393iEJeKHA_OkAHaE_?w=640&h=432&rs=1&pid=ImgDetMain&o=7&rm=3"
                      alt="Oakley Meta"
                      className="w-48 h-auto object-cover rounded-lg"
                    />
                    <p className="mt-2 font-medium text-sm">Shop HSTN</p>
                  </div>
                </div>
              </div>
            )}
          </div>

         
          <div
            className="relative"
            onMouseEnter={() => setQuestdropdown(true)}
            onMouseLeave={() => setQuestdropdown(false)}
          >
            <button className="text-lg">Meta Quest</button>

            {questdropdown && (
              <div className="absolute left-0 top-full bg-gray-300 shadow-md flex p-6 z-50 whitespace-nowrap">
                <div className="mr-16 text-lg">
                  <ul>
                    <li>
                      <Link to="Metaquest" className="block py-1">
                        Meta Quest Overview
                      </Link>
                    </li>
                    <li>
                      <Link to="Metaquest/2" className="block py-1">
                        Meta Quest 2S
                      </Link>
                    </li>
                    <li>
                      <Link to="Metaquest/3" className="block py-1">
                        Meta Quest 3s
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-6">
                  <div className="text-center">
                    <img
                      src="https://www.bing.com/th/id/OIP.2SXwxQE6dgxLMibRA6t_rwHaF7?w=205&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                      alt="Ray-Ban Meta"
                      className="w-48 h-auto object-cover rounded-lg"
                    />
                    <p className="mt-2 font-medium text-sm">Shop Wayfarer</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://www.bing.com/th/id/OIP.E2KzLGz3OADm2F2ssWuOOwHaE8?w=292&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                      alt="Oakley Meta"
                      className="w-48 h-auto object-cover rounded-lg"
                    />
                    <p className="mt-2 font-medium text-sm">Shop HSTN</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/support">Support</Link>
        </div>

        
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 outline-none text-sm bg-transparent"
            />
          </div>

          <Link to="/login">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">
              <FaUserCircle />
              Login
            </button>
          </Link>
        </div>

        
        <button
          className="md:hidden text-xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      
      {mobileMenu && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Link to="Ai-glasses/1">AI Glasses</Link>
          <Link to="Metaquest">Meta Quest</Link>
          <Link to="/support">Support</Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-center"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
