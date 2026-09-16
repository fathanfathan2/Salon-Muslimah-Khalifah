import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineClock,
} from "react-icons/hi2";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Kolom 1: Tentang */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Salon Muslimah Khalifah
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Melayani perawatan rambut dan kecantikan dengan suasana yang
              ramah, nyaman, dan sesuai syariah — khusus untuk muslimah.
            </p>
          </div>

          {/* Kolom 2: Kontak & Jam Buka */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Kontak & Jam Buka
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <HiOutlinePhone className="w-5 h-5 text-pink-500 shrink-0" />
                <a
                  href="https://wa.me/6283198734465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors"
                >
                  0831-9873-4465
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineClock className="w-5 h-5 text-pink-500 shrink-0" />
                <span>Buka Setiap Hari, 09.00 - 18.00</span>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineMapPin className="w-5 h-5 text-pink-500 shrink-0 mt-1" />
                <span>Ciomas, Bogor</span>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Lokasi Maps */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Lokasi</h4>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=Salon+Muslimah+KHALIFAH,+Ciomas&t=&z=17&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Salon Muslimah Khalifah"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            Copyright © 2026 Salon Muslimah Khalifah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;