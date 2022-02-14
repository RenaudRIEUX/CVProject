import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowlegdes";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/cvproject" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/knowledges" element={<Knowledges />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
