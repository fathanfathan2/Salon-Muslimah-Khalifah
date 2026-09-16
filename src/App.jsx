import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
      </main>
      <Footer />

      {/* Floating, muncul di atas semua komponen */}
      <WhatsAppButton />
    </div>
  );
}

export default App;