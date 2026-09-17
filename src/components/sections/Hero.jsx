import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
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
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const floatAnimation = {
  y: [0, -6, 0],
  transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
};

const Hero = () => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-pink-50 to-white px-6 py-20"
    >
      {/* Dot pattern latar belakang */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #db2777 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ornamen blob dekoratif */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-32 -right-16 w-[28rem] h-[28rem] bg-pink-400 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-25 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-rose-200 rounded-full blur-2xl opacity-30 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16"
      >
        {/* Kolom Kiri: Logo */}
        <motion.div
          variants={logoVariants}
          className="relative shrink-0 mt-6 mb-4 md:mt-0 md:mb-0"
        >
          <motion.div
            animate={floatAnimation}
            className="w-48 h-48 md:w-72 md:h-72 aspect-square rounded-full overflow-hidden shadow-2xl shadow-pink-300/60 ring-4 ring-white"
          >
            <img
              src={logoImage}
              alt="Salon Muslimah Khalifah"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Kolom Kanan: Teks */}
        <div className="text-center md:text-left flex-1">
          <motion.div
            variants={textVariants}
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-pink-200 rounded-full px-3.5 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6"
          >
            <span className="text-sm">✨</span>
            <span className="text-xs md:text-sm font-medium text-pink-700">
              Salon Muslimah Terpercaya di Ciomas
            </span>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-3xl md:text-6xl font-bold text-gray-800 leading-tight"
          >
            Tampil Cantik dan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-400">
              Percaya Diri
            </span>{" "}
            Setiap Hari
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="mt-4 md:mt-6 text-base md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0"
          >
            Serahkan perawatan kecantikan Anda kepada kami. Nyaman,
            profesional, dan hasil yang memuaskan.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center md:justify-start"
          >
            {/* Tombol Utama */}
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="#services"
              onClick={(e) => handleScroll(e, "#services")}
              className="group inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg shadow-pink-200 transition-colors duration-300 w-full sm:w-auto cursor-pointer"
            >
              Lihat Layanan Kami
              <HiArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            {/* Tombol Sekunder */}
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="#footer"
              onClick={(e) => handleScroll(e, "#footer")}
              className="inline-flex items-center justify-center border-2 border-pink-300 text-pink-600 hover:bg-pink-50 font-semibold text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full transition-colors duration-300 w-full sm:w-auto cursor-pointer"
            >
              Selengkapnya
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;