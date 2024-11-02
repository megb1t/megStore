import "./App.css";
import Navbar from "./components/Navbar";
import Support from "./pages/support";
import Cart from "./pages/cart";
import Discover from "./pages/discover";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/discover" element={<Discover />}></Route>
          <Route path="/support" element={<Support />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
