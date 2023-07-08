import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import Players from "./pages/Players";
import Fixtures from "./pages/Fixtures";
import League from "./pages/League";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="appBg flex flex-col justify-between h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/players" element={<Players />} />
              <Route path="/fixtures" element={<Fixtures />} />
              <Route path="/league/:leagueId" element={<League />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
