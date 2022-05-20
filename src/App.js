import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Error404 from "./components/Errors/Error404";
import Signin from "./components/Signin/Signin";
import Footer from "./components/Footer/Footer";
import NavbarIndex from "./components/Navbar/NavbarIndex";
import Table from "./components/Tables/Table"
import Product from "./components/Product/Product";
import Routered from "./components/Routered"
function App() {
  const SıgIn = true;


  return (
    <div className="App">

     
      {SıgIn ? (
        <Routered />
      ):(
          <Signin />
        )}

      <Footer />
        </div>
        
  );

}
export default App;
