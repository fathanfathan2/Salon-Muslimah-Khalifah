import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;