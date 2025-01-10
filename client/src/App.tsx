import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="container-app">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
