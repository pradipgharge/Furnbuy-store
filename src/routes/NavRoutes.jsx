import { Routes, Route } from "react-router-dom";
import { Home, Products } from "../pages";
import MockMan from "mockman-js";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/mockman" element={<MockMan />} />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export { NavRoutes };
