// 1. IMPORT GAMBAR LOKAL TETAP AMAN
import imgHaircut from "../assets/images/haircut.png";
import imgTreatment from "../assets/images/hairtreatment.png";
import imgMakeup from "../assets/images/makeup2.png";

export const serviceCategories = [
  {
    id: "hair-cut-styling",
    title: "Hair Cut & Styling",
    image: imgHaircut,
    items: [
      { name: "Potong Rambut + Cuci Blow Anak", price: "Rp 15.000" },
      { name: "Potong Rambut + Cuci Blow Dewasa", price: "Rp 20.000" },
      { name: "Cuci Blow", price: "Rp 15.000" },
      { name: "Cuci Blow Catok", price: "Rp 20.000" },
      { name: "Hair Do", price: "Rp 25.000" }, // <- Sudah dikembalikan
    ],
  },
  {
    id: "hair-treatment",
    title: "Hair Treatment",
    image: imgTreatment,
    items: [
      {
        name: "Creambath Anak",
        variants: [
          { label: "Rambut Pendek", price: "Rp 25.000" },
          { label: "Rambut Panjang", price: "Rp 35.000" },
        ],
      },
      {
        name: "Creambath Dewasa",
        variants: [
          { label: "Rambut Pendek", price: "Rp 35.000" },
          { label: "Rambut Panjang", price: "Rp 45.000" },
        ],
      },
      {
        name: "Hairmasker",
        variants: [
          { label: "Rambut Pendek", price: "Rp 40.000" },
          { label: "Rambut Panjang", price: "Rp 50.000" },
        ],
      },
      {
        name: "Hairspa",
        variants: [
          { label: "Rambut Pendek", price: "Rp 40.000" },
          { label: "Rambut Panjang", price: "Rp 50.000" },
        ],
      },
      {
        name: "Perawatan Anti Kutu (Peditox + Catok)",
        variants: [
          { label: "Rambut Pendek", price: "Rp 40.000" },
          { label: "Rambut Panjang", price: "Rp 50.000" },
        ],
      },
    ],
  },
  {
    id: "coloring",
    title: "Coloring",
    // Kalau ibumu punya foto hasil pewarnaan rambut, tinggal import dan ganti link ini ya
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Cat Henna",
        variants: [
          { label: "Rambut Pendek", price: "Rp 50.000" },
          { label: "Rambut Panjang", price: "Rp 70.000" },
        ],
      },
      {
        name: "Cat Rambut Felice",
        variants: [
          { label: "Rambut Pendek", price: "Rp 70.000" },
          { label: "Rambut Panjang", price: "Rp 120.000" },
        ],
      },
      {
        name: "Bleaching",
        variants: [
          { label: "Rambut Pendek", price: "Rp 70.000" },
          { label: "Rambut Panjang", price: "Rp 100.000" },
        ],
      },
      {
        name: "Highlight",
        variants: [
          { label: "Rambut Pendek", price: "Rp 160.000" },
          { label: "Rambut Panjang", price: "Rp 190.000" },
        ],
      },
      {
        name: "Ombre Dua Warna",
        variants: [
          { label: "Pendek", price: "Rp 160.000" },
          { label: "Panjang", price: "Rp 200.000" },
        ],
      },
    ],
  },
  {
    id: "face-body",
    title: "Face & Body",
    image: imgMakeup,
    items: [
      { name: "Massage + Scrub (Lulur)", price: "Rp 75.000" },
      { name: "Facial Wardah", price: "Rp 50.000" },
      { name: "Totok Wajah", price: "Rp 25.000" },
      { name: "Make Up Wisuda", price: "Rp -" }, // <- Sudah dikembalikan
    ],
  },
];