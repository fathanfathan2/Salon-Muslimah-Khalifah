import { motion } from "framer-motion";
// 1. KITA IMPORT GAMBARNYA DI SINI
import logoImage from "../../assets/images/logo.png"; 

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-pink-50 to-white px-6 py-20"
    >
      {/* Ornamen blob dekoratif */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-32 -right-16 w-[28rem] h-[28rem] bg-pink-400 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16"
      >
        {/* Kolom Kiri (Desktop) / Atas (Mobile): Logo */}
        <motion.div
          variants={logoVariants}
          className="shrink-0"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 aspect-square rounded-full overflow-hidden shadow-2xl shadow-pink-300/60 ring-4 ring-white">
            <img
              src={logoImage} /* 2. KITA PANGGIL VARIABEL GAMBARNYA DI SINI */
              alt="Salon Muslimah Khalifah"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Kolom Kanan (Desktop) / Bawah (Mobile): Teks */}
        <div className="text-center md:text-left flex-1">
          <motion.h1
            variants={textVariants}
            className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
          >
            Tampil Cantik dan{" "}
            <span className="text-pink-600">Percaya Diri</span> Setiap Hari
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0"
          >
            Serahkan perawatan kecantikan Anda kepada kami. Nyaman,
            profesional, dan hasil yang memuaskan.
          </motion.p>

          <motion.div variants={textVariants} className="mt-10">
            <a
              href="#services"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg shadow-pink-200 transition-colors duration-300"
            >
              Reservasi Sekarang
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;