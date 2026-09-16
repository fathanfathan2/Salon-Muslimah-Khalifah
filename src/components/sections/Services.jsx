import { useState } from "react";
import { serviceCategories } from "../../constants/data";
import PriceModal from "../ui/PriceModal";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="services" className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Layanan Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden h-40">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-1">
                  {category.items.length} pilihan layanan
                </p>

                <button
                  onClick={() => setActiveCategory(category)}
                  className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold py-2 rounded-full transition-colors duration-300"
                >
                  Lihat Daftar Harga
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PriceModal
        category={activeCategory}
        onClose={() => setActiveCategory(null)}
      />
    </section>
  );
};

export default Services;