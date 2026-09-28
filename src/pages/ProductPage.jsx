import { Link, useParams } from "react-router";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import PageMeta from "../components/PageMeta";
import { products } from "../data/products";
import NotFound from "./NotFound";

export default function ProductPage({ onAdd, onOpenBag }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  if (!product) return <NotFound />;
  return <>
    <PageMeta title={product.name} description={`View ${product.name} in the NexStore sample collection. Prices and ordering are not available yet.`} />
    <div className="wrap product-page">
      <Link className="back-link" to="/shop"><ArrowLeft size={17} /> Back to collection</Link>
      <div className="product-detail">
        <div className="detail-image"><img src={product.image} alt={product.name} /></div>
        <div className="detail-copy"><p className="eyebrow">{product.category.toUpperCase()} / SAMPLE ITEM</p><h1>{product.name}</h1><p>{product.detail}</p><div className="detail-notice"><strong>About this listing</strong><p>This is a sample product image. Price, sizes, stock and delivery information are not available. You can save it to the demo bag, but an order cannot be placed.</p></div><div className="detail-actions"><button className="primary-button" type="button" onClick={() => { onAdd(product.id); onOpenBag(); }}><ShoppingBag size={19} /> Add to demo bag</button><Link className="secondary-button" to="/shop">Continue browsing</Link></div></div>
      </div>
    </div>
  </>;
}
