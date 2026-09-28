import { useState } from "react";
import { Menu, Moon, Search, ShoppingBag, Sun, X } from "lucide-react";
import logo from "../assets/logo.svg";
import { categories } from "../data/products";

export default function Navbar({ query, onSearch, count, onCart, onCategory }) {
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
      <a className="brand" href="#top" aria-label="NexStore home"><img src={logo} alt="" width="38" height="38" />NexStore</a>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#top">Home</a>{categories.slice(1).map((item) => <a href="#shop" onClick={() => onCategory(item)} key={item}>{item}</a>)}</nav>
      <div className="nav-actions">
        <button className="icon-button" type="button" onClick={toggleTheme} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun size={21} /> : <Moon size={21} />}</button>
        <button className="bag-button" type="button" onClick={onCart} aria-label={`Open bag, ${count} items`}><ShoppingBag size={20} /><span aria-live="polite">{count}</span></button>
        <button className="icon-button mobile-menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-controls="mobile-nav" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </div>
    <div className="wrap nav-search"><Search size={19} aria-hidden="true" /><label htmlFor="catalog-search" className="sr-only">Search sample products</label><input id="catalog-search" type="search" placeholder="Search the collection" value={query} onChange={(event) => onSearch(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" }); }} /></div>
    {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation"><a href="#top" onClick={() => setMenuOpen(false)}>Home</a>{categories.slice(1).map((item) => <a href="#shop" key={item} onClick={() => { onCategory(item); setMenuOpen(false); }}>{item}</a>)}</nav>}
  </header>;
}
