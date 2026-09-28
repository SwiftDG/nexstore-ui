import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, Moon, Search, ShoppingBag, Sun, X } from "lucide-react";
import logo from "../assets/logo.svg";
import { categories } from "../data/products";

export default function Navbar({ query, onSearch, count, onCart }) {
  const location = useLocation();
  const [dark, setDark] = useState(() => localStorage.getItem("nexstore-theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("nexstore-theme", next ? "dark" : "light");
  }
  return <header className="site-header">
    <div className="wrap nav-row">
      <Link className="brand" to="/" aria-label="NexStore home"><img src={logo} alt="" width="38" height="38" />NexStore</Link>
      <nav className="desktop-nav" aria-label="Main navigation"><NavLink to="/" end>Home</NavLink><NavLink to="/shop">Shop</NavLink><NavLink to="/about">About</NavLink></nav>
      <div className="nav-actions">
        <button className="icon-button" type="button" onClick={toggleTheme} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun size={21} /> : <Moon size={21} />}</button>
        <button className="bag-button" type="button" onClick={onCart} aria-label={`Open bag, ${count} items`}><ShoppingBag size={20} /><span aria-live="polite">{count}</span></button>
        <button className="icon-button mobile-menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-controls="mobile-nav" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </div>
    <div className="wrap nav-search"><Search size={19} aria-hidden="true" /><label htmlFor="catalog-search" className="sr-only">Search sample products</label><input id="catalog-search" type="search" placeholder="Search the collection" value={query} onChange={(event) => onSearch(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && location.pathname === "/shop") document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" }); }} /></div>
    {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation"><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>{categories.slice(1).map((item) => <Link to={`/shop?category=${item}`} key={item} onClick={() => setMenuOpen(false)}>{item}</Link>)}<Link to="/about" onClick={() => setMenuOpen(false)}>About</Link><Link to="/bag" onClick={() => setMenuOpen(false)}>Bag ({count})</Link></nav>}
  </header>;
}
