import './App.css';
import Navbar from './Components/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Cart from './Components/Cart';
import Home from './Components/Home';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
