import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <>
      <section>
        <About />
        <Home />
        <Contact />
        <Login />
        <Register />
        <Footer />
      </section>
    </>
  );
}

export default App;
