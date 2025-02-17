import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/contact";
import MusicContext from "./context/MusicContext";
import Details from "./components/Details";
import AlbumDetails from "./components/AlbumDetails";
import ArtistDetails from "./components/ArtistDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <>
      <MusicContext>
        <Router>
          <Header />
          <Routes>
            {/*public routes */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            {/*protected routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route path="/song/:id" element={<Details />} />
            <Route path="/album/:id" element={<AlbumDetails />} />
            <Route path="/artist/:id" element={<ArtistDetails />} />
          </Routes>
        </Router>
      </MusicContext>
    </>
  );
}

export default App;
