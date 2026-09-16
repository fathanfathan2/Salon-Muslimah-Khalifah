import { motion, AnimatePresence } from "framer-motion";
import { HiXMark } from "react-icons/hi2";

// Pesan dibuat mutlak/statis sesuai permintaanmu
const waLink = `https://wa.me/6283198734465?text=${encodeURIComponent(
  "Halo, saya ingin reservasi perawatan di salon muslimah khalifah"
)}`;

const PriceModal = ({ category, onClose }) => {
  if (!category) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          key="panel"
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h3 className="text-xl font-bold text-gray-800">
              {category.title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Tutup"
            >
              <HiXMark className="w-6 h-6" />
            </button>
          </div>

          {/* Daftar harga (scrollable) */}
          <div className="overflow-y-auto px-6 py-4 flex-1">
            <ul className="divide-y divide-gray-100">
              {category.items.map((item) => (
                <li key={item.name} className="py-3">
                  {item.variants ? (
                    <div>
                      <p className="font-medium text-gray-800 mb-1">
                        {item.name}
                      </p>
                      <ul className="pl-3 space-y-1">
                        {item.variants.map((v) => (
                          <li
                            key={v.label}
                            className="flex justify-between text-sm text-gray-500"
                          >
                            <span>{v.label}</span>
                            <span className="text-pink-600 font-semibold">
                              {v.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800">{item.name}</span>
                      <span className="text-pink-600 font-semibold text-sm">
                        {item.price}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Tombol reservasi */}
          <div className="px-6 py-4 border-t">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full shadow-lg shadow-green-200 transition-colors duration-300"
            >
              Chat & Reservasi via WA
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PriceModal;