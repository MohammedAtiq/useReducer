import './App.css';
import Navbar from './Components/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Cart from './Components/Cart';
import Home2 from './Components/Home2';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home2" element={<Home2 />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
