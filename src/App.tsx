import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "./components/Navigation";
const Home = lazy(() => import("./pages/Home"));
import Typewriter from "typewriter-effect";
import { motion, useScroll, useSpring } from "framer-motion";
import Wonderstruck from "./pages/Wonderstruck/Wonderstruck";
import NotFound from "./pages/NotFound/NotFound";
import styled from "styled-components";
import { Analytics } from "@vercel/analytics/react";
const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  color: var(--speak-now-1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-family: GothamMedium;
`;
const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <Suspense fallback={<Loading>Hi, I'm Taylor</Loading>}>
      <BrowserRouter>
        <Navigation />
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wonderstruck" element={<Wonderstruck />} />
          {/* <Route path="/form_hn" element={<Form />} />
          <Route path="/form_dn" element={<Form />} />
          <Route path="/form_sg" element={<FormSaiGon />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </Suspense>
  );
};
export default App;
