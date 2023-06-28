import "./App.css";
import { Suspense, createContext, lazy, useEffect, useState } from "react";
import shoeInfo from "./data";
import restShoes from "./data2";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import MainPage from "./routes/mainpage";
import NavbarCompo from "./components/navbar";
import Loading from "./components/loading";
// import DetailPage from "./routes/detailpage";
import Event from "./components/event";
import Cart from "./routes/Cart";
import ProductsAll from "./routes/ProductsAll";

// LAZY IMPORT
const DetailPage = lazy(() => import("./routes/detailpage"));
// const Event = lazy(() => import("./components/event"));
// const Cart = lazy(() => import("./routes/Cart"));
// const ProductsAll = lazy(() => import("./routes/ProductsAll"));

function App() {
  // STATEs AND VARs
  let [shoes, setShoes] = useState(shoeInfo);
  let [restShoesAll, setRestShoesAll] = useState(restShoes);
  let [loading, setLoading] = useState(true);

  // Loading and LocalStorage instead DB
  useEffect(() => {
    if (localStorage.getItem("watched") == undefined) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
    setLoading(false);
  }, []);

  return (
    <div className="App">
      {loading == true ? <Loading /> : null}

      {/* NAV BAR */}
      <NavbarCompo shoes={shoes} />
      {/* ROUTER */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                shoes={shoes}
                setShoes={setShoes}
                restShoes={restShoes}
              />
            }
          />
          <Route
            path="/products"
            element={<ProductsAll shoes={shoes} restShoes={restShoesAll} />}
          />
          <Route
            path="/detail/:id"
            element={<DetailPage shoes={shoes} restShoes={restShoesAll} />}
          />
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
      </Suspense>
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
