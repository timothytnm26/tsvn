import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "./pages/About";
import { Wonderstruck } from "./pages/Wonderstruck";
import { Suspense } from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wonderstruck" element={<Wonderstruck />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};
export default App;
