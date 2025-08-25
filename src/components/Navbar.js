import { useState } from "react";
import { FaMeta } from "react-icons/fa6";
import { FaSearch, FaUserCircle, FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [questdropdown, setQuestdropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileGlasses, setMobileGlasses] = useState(false);
  const [mobileQuest, setMobileQuest] = useState(false);

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
                    Ray Ban Meta
                  </Link>
                  <Link to="Ai-glasses/3" className="block py-1">
                    Oakley Meta
                  </Link>
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
                        Meta Quest 3S
                      </Link>
                    </li>
                  </ul>
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
        <div className="flex flex-col gap-3 mt-4 md:hidden">
          
          <div>
            <button
              className="w-full text-left font-semibold"
              onClick={() => setMobileGlasses(!mobileGlasses)}
            >
              AI Glasses {mobileGlasses ? "▲" : "▼"}
            </button>
            {mobileGlasses && (
              <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                <Link to="Ai-glasses/1">About AI Glasses</Link>
                <Link to="Ai-glasses/2">Ray Ban Meta</Link>
                <Link to="Ai-glasses/3">Oakley Meta</Link>
              </div>
            )}
          </div>

          
          <div>
            <button
              className="w-full text-left font-semibold"
              onClick={() => setMobileQuest(!mobileQuest)}
            >
              Meta Quest {mobileQuest ? "▲" : "▼"}
            </button>
            {mobileQuest && (
              <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                <Link to="Metaquest">Meta Quest Overview</Link>
                <Link to="Metaquest/2">Meta Quest 2S</Link>
                <Link to="Metaquest/3">Meta Quest 3S</Link>
              </div>
            )}
          </div>

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
