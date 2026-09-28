import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import BagPage from "./pages/BagPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import PageMeta from "./components/PageMeta";
import { products } from "./data/products";
import "./pages.css";

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("nexstore-demo-cart") || "{}");
    return Object.fromEntries(Object.entries(saved).filter(([id, qty]) =>
      products.some((product) => product.id === id) && Number.isInteger(qty) && qty > 0 && qty <= 99));
  } catch { return {}; }
}

export default function App() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState(readCart);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  useEffect(() => { localStorage.setItem("nexstore-demo-cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  function updateCart(id, qty) {
    setCart((current) => {
      const next = { ...current };
      if (qty <= 0) delete next[id]; else next[id] = Math.min(qty, 99);
      return next;
    });
  }
  function chooseCategory(value) {
    navigate(value === "All" ? "/shop" : `/shop?category=${encodeURIComponent(value)}`);
  }
  function search(value) {
    setQuery(value);
    if (location.pathname !== "/shop") navigate("/shop");
  }

  return <div className="site-shell">
    <Navbar query={query} onSearch={search} count={count} onCart={() => setCartOpen(true)} />
    <main><Routes>
      <Route path="/" element={<><PageMeta title="Explore the sample collection" description="Browse NexStore's sample fashion collection and save picks to a demo bag." /><Hero /><Products query={query} onSearch={search} category="All" onCategory={chooseCategory} onAdd={(id) => updateCart(id, (cart[id] || 0) + 1)} /></>} />
      <Route path="/shop" element={<ShopPage query={query} onSearch={setQuery} onAdd={(id) => updateCart(id, (cart[id] || 0) + 1)} />} />
      <Route path="/product/:id" element={<ProductPage onAdd={(id) => updateCart(id, (cart[id] || 0) + 1)} onOpenBag={() => setCartOpen(true)} />} />
      <Route path="/bag" element={<BagPage cart={cart} onChange={updateCart} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes></main>
    <Footer />
    <Cart open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onChange={updateCart} />
  </div>;
}
