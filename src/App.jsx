import React, {useEffect,Fragment} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import ScrollToTop from "./utils/ScrollToTop";
import "./App.css";

function App() {
  
  
  
  return (
    <>
    <ScrollToTop>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Menu" element={<Menu />} />
    </Routes>
    </ScrollToTop>
    </>
  );
}

export default App;
