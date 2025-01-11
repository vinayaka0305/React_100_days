import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/contact";
import MusicContext from "./context/MusicContext";
import Details from "./components/Details";
import AlbumDetails from "./components/AlbumDetails";
import "./App.css";

function App() {
  return (
    <>
      <MusicContext>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/song/:id" element={<Details/>} />
            <Route path="/album/:id" element={<AlbumDetails/>} />
          </Routes>
        </Router>
      </MusicContext>
    </>
  );
}

export default App;
