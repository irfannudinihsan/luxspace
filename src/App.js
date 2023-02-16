// import logo from './logo.svg';
import "assets/css/app.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "pages/HomePage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congratulations from "pages/Congratulations";
import NotFound from "pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/:idc" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/congratulation" element={<Congratulations />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
