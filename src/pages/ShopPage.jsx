import { useSearchParams } from "react-router";
import Products from "../components/Products";
import PageMeta from "../components/PageMeta";
import { categories } from "../data/products";

export default function ShopPage({ query, onSearch, onAdd }) {
  const [params, setParams] = useSearchParams();
  const requested = params.get("category");
  const category = categories.includes(requested) ? requested : "All";
  function chooseCategory(value) {
    setParams(value === "All" ? {} : { category: value });
  }
  return <>
    <PageMeta title="Shop the sample collection" description="Browse NexStore's sample shirt collection by category or search by name. Save selections in a demo bag." />
    <div className="page-intro"><div className="wrap"><p className="eyebrow">NEXSTORE / SHOP</p><h1>The collection</h1><p>Explore the shirts currently used to demonstrate this storefront. Product prices and availability have not been connected.</p></div></div>
    <Products query={query} onSearch={onSearch} category={category} onCategory={chooseCategory} onAdd={onAdd} />
  </>;
}
