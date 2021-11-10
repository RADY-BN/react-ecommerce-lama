import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/signup" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product" element={<Product />} exact />
      </Routes>
    </Router>
  );
};

export default App;
