import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#06141B] overflow-x-hidden">
      {/* Orbe de luz — efecto atmosférico */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(156,168,171,0.13) 0%, rgba(74,92,106,0.07) 40%, transparent 70%)",
        }}
      />
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(204,208,207,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Nav */}
      <NavBar />

      {/* Contenido */}
      <main className="relative z-10">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
