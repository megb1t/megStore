import './App.css'
import Home from './pages/home'
import Navbar from './components/Navbar'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Discover from './pages/discover';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/discover" element={<Discover/>}></Route>
        </Routes>

      </Router>

    </>
  )
}

export default App
