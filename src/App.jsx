import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    )
}
