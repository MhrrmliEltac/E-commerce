import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./Components/Main/Main";

import Navbar from "./Components/Header/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductItem/ProductDetail";
import Footer from "./Components/Footer/Footer";
import Shop from "./Components/Pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid-app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productdetail/:title" element={<ProductDetail />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
