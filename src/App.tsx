import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Suspense } from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { Wonderstruck } from "./pages/Wonderstruck/Wonderstruck";
import { Form } from "./pages/Forms/Form";
const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Navigation />
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wonderstruck" element={<Wonderstruck />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};
export default App;
