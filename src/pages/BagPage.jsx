import { Link } from "react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import PageMeta from "../components/PageMeta";
import { products } from "../data/products";

export default function BagPage({ cart, onChange }) {
  const items = products.filter((product) => cart[product.id]);
  const count = items.reduce((sum, product) => sum + cart[product.id], 0);
  return <>
    <PageMeta title="Your demo bag" description="Review selections saved in your browser on the NexStore sample storefront." noIndex />
    <div className="page-intro"><div className="wrap"><p className="eyebrow">NEXSTORE / BAG</p><h1>Your bag</h1><p>{count} {count === 1 ? "item" : "items"} saved in this browser</p></div></div>
    <div className="wrap bag-page">{items.length ? <><ul className="bag-list">{items.map((product) => <li key={product.id} className="bag-row"><Link to={`/product/${product.id}`} className="bag-row-image"><img src={product.image} alt="" /></Link><div><p className="eyebrow">{product.category}</p><h2><Link to={`/product/${product.id}`}>{product.name}</Link></h2><div className="quantity"><button type="button" onClick={() => onChange(product.id, cart[product.id] - 1)} aria-label={`Remove one ${product.name}`}><Minus size={16} /></button><span aria-label={`Quantity ${cart[product.id]}`}>{cart[product.id]}</span><button type="button" onClick={() => onChange(product.id, cart[product.id] + 1)} disabled={cart[product.id] >= 99} aria-label={`Add one ${product.name}`}><Plus size={16} /></button></div></div><button className="remove-item" type="button" onClick={() => onChange(product.id, 0)} aria-label={`Remove ${product.name} from bag`}><Trash2 size={19} /></button></li>)}</ul><div className="bag-info"><h2>Demo bag only</h2><p>Selections are stored on this device. Prices, stock and checkout are not connected, so no order or payment can be made.</p><Link className="secondary-button" to="/shop">Keep browsing</Link></div></> : <div className="empty-results"><h2>Nothing in your bag yet</h2><p>Find a shirt in the sample collection and add it here.</p><Link className="primary-button" to="/shop">Explore the collection</Link></div>}</div>
  </>;
}
