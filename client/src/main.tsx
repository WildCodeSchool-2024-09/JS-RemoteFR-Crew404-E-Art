import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";

import App from "./App";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
/**
 * Pages
 */
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Profil from "./pages/Profil/Profil";
import Register from "./pages/Register/Register";

import { StrictMode } from "react";
/**
 * Components
 */
import Artwork from "./components/Artwork/Artwork";
import AddArtwork from "./pages/AddArtwork/AddArtwork";
import ProfilArtist from "./pages/ProfilArtist/ProfilArtist";
import { api } from "./services/api";

const router = createBrowserRouter([
  {
    path: "/", // The root path
    element: <App />, // Renders the App component for the home page
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          try {
            const response = await api.get("/api/oeuvres");
            return response.data;
          } catch (error) {
            console.error(error);
            return null;
          }
        },
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profil",
        element: <Profil />,
      },
      {
        path: "/profil-artist",
        element: <ProfilArtist />,
      },
      {
        path: "/artwork-page",
        element: <AddArtwork />,
      },
      {
        path: "/artwork-page/:id",
        element: <Artwork />,
        loader: async ({ params }) => {
          try {
            const reponse = await api.get(`/api/oeuvres/${params.id}`);

            return reponse.data;
          } catch (error) {
            console.error(error);
            return null;
          }
        },
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </AuthProvider>
    </StrictMode>,
  );
}
