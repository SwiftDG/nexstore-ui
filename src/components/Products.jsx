import { ShoppingBag } from "lucide-react";
import { categories, products } from "../data/products";

export default function Products({ query, onSearch, category, onCategory, onAdd }) {
  const term = query.trim().toLocaleLowerCase();
  const shown = products.filter((product) => (category === "All" || product.category === category) && product.name.toLocaleLowerCase().includes(term));
  return <section id="shop" className="wrap catalog-section" aria-labelledby="catalog-title">
    <div className="section-heading"><div><p className="eyebrow">THE COLLECTION</p><h2 id="catalog-title">Browse the edit</h2></div><p>Sample products for browsing. Prices, stock and checkout are not connected yet.</p></div>
    <div className="category-list" role="group" aria-label="Filter by category">{categories.map((item) => <button type="button" key={item} className={category === item ? "category active" : "category"} aria-pressed={category === item} onClick={() => onCategory(item)}>{item}</button>)}</div>
    <p className="result-count" aria-live="polite">{shown.length} {shown.length === 1 ? "item" : "items"}</p>
    {shown.length ? <div className="product-grid">{shown.map((product) => <article className="product-card" key={product.id}><div className="product-image"><img src={product.image} alt={product.name} loading="lazy" /></div><div className="product-meta"><div><p>{product.category}</p><h3>{product.name}</h3></div><button type="button" onClick={() => onAdd(product.id)} aria-label={`Add ${product.name} to bag`}><ShoppingBag size={19} /></button></div></article>)}</div> : <div className="empty-results"><h3>No matches in this collection</h3><p>Try another name or category.</p><button type="button" onClick={() => { onSearch(""); onCategory("All"); }}>Clear filters</button></div>}
  </section>;
}
