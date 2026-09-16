import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "6283198734465";
  const message = "Halo, saya ingin reservasi perawatan di salon";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-300/50 flex items-center justify-center"
      aria-label="Chat via WhatsApp"
    >
      <HiChatBubbleOvalLeftEllipsis className="w-7 h-7" />
    </motion.a>
  );
};

export default WhatsAppButton;