import "./App.css";
import { createContext, useState } from "react";
import shoeInfo from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailPage from "./routes/detailpage";
import MainPage from "./routes/mainpage";
import NavbarCompo from "./components/navbar";
import Event from "./components/event";
import Cart from "./routes/Cart";

function App() {
  // STATEs AND VARs
  let [shoes, setShoes] = useState(shoeInfo);
  let [stocks, setStocks] = useState([10, 11, 12]);

  return (
    <div className="App">
      {/* NAV BAR */}
      <NavbarCompo />
      {/* ROUTER */}
      <Routes>
        <Route
          path="/"
          element={<MainPage shoes={shoes} setShoes={setShoes} />}
        />
        <Route path="/detail" element={<div>Detail ALL</div>} />
        <Route path="/detail/:id" element={<DetailPage shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="members" element={<div>Members</div>} />
          <Route path="location" element={<div>Location</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>1. Birthday Event</p>} />
          <Route path="two" element={<p>2. First order Event</p>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404 Page None</div>} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>About our company</h4>
      <Outlet />
    </div>
  );
}

export default App;
