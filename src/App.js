import Body from "./Body";
import About from "./About";
import Navbars from "./Navbar";
import Menu from './Menu'
import PageNotFound from "./PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";

function App() {
  
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        {/* start nested routing */}
        <Route path="/menu" element={<Menu />}>
          {/* index route */}
          {/* <Route index="traditionaldish" element={<Traditional />} /> */}
          {/* end index routing */}
          {/* <Route path="traditionaldish" element={<Traditional />} /> */}
          {/* <Route path="fastfood" element={<FastFood />} /> */}
        </Route>
        {/* end nested routing */}
        {/* <Route path="/order-summary" element={<Order />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}

export default App;
