import { useEffect, useRef } from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { products } from "../data/products";

export default function Cart({ open, onClose, cart, onChange }) {
  const dialog = useRef(null);
  useEffect(() => { const node = dialog.current; if (open && !node.open) node.showModal(); if (!open && node.open) node.close(); }, [open]);
  const items = products.filter((product) => cart[product.id]);
  return <dialog ref={dialog} className="cart-dialog" onClose={onClose} onCancel={onClose} onClick={(event) => { if (event.target === dialog.current) onClose(); }} aria-labelledby="bag-title"><div className="cart-inner">
    <div className="cart-header"><div><p className="eyebrow">NEXSTORE</p><h2 id="bag-title">Your bag</h2></div><button className="icon-button" type="button" onClick={onClose} aria-label="Close bag"><X /></button></div>
    {items.length ? <ul className="cart-items">{items.map((product) => <li className="cart-item" key={product.id}><img src={product.image} alt="" /><div><strong>{product.name}</strong><small>{product.category}</small><div className="quantity"><button type="button" onClick={() => onChange(product.id, cart[product.id] - 1)} aria-label={`Remove one ${product.name}`}><Minus size={16} /></button><span aria-label={`Quantity ${cart[product.id]}`}>{cart[product.id]}</span><button type="button" onClick={() => onChange(product.id, cart[product.id] + 1)} aria-label={`Add one ${product.name}`} disabled={cart[product.id] >= 99}><Plus size={16} /></button></div></div><button className="remove-item" type="button" onClick={() => onChange(product.id, 0)} aria-label={`Remove ${product.name} from bag`}><Trash2 size={18} /></button></li>)}</ul> : <div className="cart-empty"><ShoppingBag size={38} aria-hidden="true" /><h3>Your bag is empty</h3><p>Explore the collection and add something you like.</p><button className="primary-button" type="button" onClick={onClose}>Continue browsing</button></div>}
    {items.length > 0 && <div className="cart-note"><strong>This is a demo bag</strong><p>Your choices are saved in this browser. Orders and payments are not available because prices and store inventory are not connected.</p></div>}
  </div></dialog>;
}
