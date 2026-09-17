import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Layanan", href: "#services" },
  { label: "Kontak", href: "#footer" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, href) => {
    e.preventDefault(); 
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // 1. Tutup menu mobile terlebih dahulu
      setIsOpen(false);
      
      // 2. Beri jeda sangat singkat agar menu selesai tertutup
      // sebelum layar meluncur, agar browser tidak bingung
      setTimeout(() => {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 50); // jeda 50 milidetik
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Nama Salon */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="text-xl font-bold text-gray-800"
        >
          Salon<span className="text-pink-600">Khalifah</span>
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-600 hover:text-pink-600 font-medium transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Hamburger — Mobile */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-gray-700 hover:text-pink-600 transition-colors"
          aria-label="Buka menu"
        >
          {isOpen ? (
            <HiXMark className="w-7 h-7" />
          ) : (
            <HiOutlineBars3 className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Dropdown Menu — Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            // Tambahan 'absolute left-0 top-full w-full' agar menu melayang 
            // dan tidak merusak layout saat dibuka
            className="md:hidden absolute left-0 top-full w-full overflow-hidden bg-white/95 backdrop-blur-md border-t shadow-lg"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="block px-6 py-4 text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;