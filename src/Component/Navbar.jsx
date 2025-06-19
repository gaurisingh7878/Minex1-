import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-amber-400 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/src/Imges/Minex.png" alt="CryptoCoin Logo" className="w-10 h-10" />
        
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-yellow-500">HOME</a>
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-yellow-500">ABOUT</a>
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-yellow-500">SERVICE</a>
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-yellow-500">PAGES</a>
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-yellow-500">BLOG</a>
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-yellow-500">CONTACT</a>
          <button className="bg-yellow-400 text-white px-6 py-2 rounded hover:bg-yellow-500 text-sm font-semibold">
            REGISTER NOW
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          {["HOME", "ABOUT", "SERVICE", "PAGES", "BLOG", "CONTACT"].map((item) => (
            <a key={item} href="#" className="block text-gray-800 font-medium hover:text-yellow-500">
              {item}
            </a>
          ))}
          <button className="w-full bg-yellow-400 text-white py-2 rounded hover:bg-yellow-500 text-sm font-semibold">
            REGISTER NOW
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
