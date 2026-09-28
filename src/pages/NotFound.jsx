import { Link } from "react-router";
import PageMeta from "../components/PageMeta";

export default function NotFound() {
  return <div className="wrap not-found"><PageMeta title="Page not found" description="The requested NexStore page could not be found." noIndex /><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>We could not find that page.</h1><p>The address may have changed, or the item is no longer in this sample collection.</p><Link className="primary-button" to="/shop">Back to collection</Link></div>;
}
