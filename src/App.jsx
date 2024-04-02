import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Home } from "./pages/home/Home";
import { Portfolio } from "./pages/portfolio/Portfolio";
import { Themes } from "./components/Themes";

function App() {
  const array = [1, 2, 3, 4, 4, 5];
  const res = array.filter((array) => array > 3);
  console.log(res);
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
