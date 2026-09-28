import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { products } from "./data/products";

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("nexstore-demo-cart") || "{}");
    return Object.fromEntries(Object.entries(saved).filter(([id, qty]) =>
      products.some((product) => product.id === id) && Number.isInteger(qty) && qty > 0 && qty <= 99));
  } catch { return {}; }
}

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState(readCart);
  const [cartOpen, setCartOpen] = useState(false);
  const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  useEffect(() => { localStorage.setItem("nexstore-demo-cart", JSON.stringify(cart)); }, [cart]);

  function updateCart(id, qty) {
    setCart((current) => {
      const next = { ...current };
      if (qty <= 0) delete next[id]; else next[id] = Math.min(qty, 99);
      return next;
    });
  }
  function chooseCategory(value) {
    setCategory(value);
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  }

  return <div className="site-shell">
    <Navbar query={query} onSearch={setQuery} count={count} onCart={() => setCartOpen(true)} onCategory={chooseCategory} />
    <main><Hero /><Products query={query} onSearch={setQuery} category={category} onCategory={setCategory} onAdd={(id) => updateCart(id, (cart[id] || 0) + 1)} /></main>
    <Footer />
    <Cart open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onChange={updateCart} />
  </div>;
}
