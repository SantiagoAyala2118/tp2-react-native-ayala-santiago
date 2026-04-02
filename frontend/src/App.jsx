import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <HomePage />;
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
