import { Link } from "react-router";
import PageMeta from "../components/PageMeta";

export default function AboutPage() {
  return <>
    <PageMeta title="About this storefront" description="Learn what works in the NexStore storefront demo and what is still being developed." />
    <div className="page-intro"><div className="wrap"><p className="eyebrow">NEXSTORE / ABOUT</p><h1>A storefront in progress</h1><p>NexStore is a frontend demonstration by David Gilbert. It shows how a small fashion collection can be browsed and saved without presenting the demo as a live shop.</p></div></div>
    <div className="wrap about-grid"><section><h2>What you can do</h2><p>Browse the sample collection, search product names, filter by category, view each item and manage a bag. Your bag and theme choice are saved in your browser.</p></section><section><h2>What comes next</h2><p>The catalogue needs verified product details, prices, availability, store policies and a secure order flow before it can serve real customers. Nothing on this site accepts payments or submits orders.</p></section><div className="about-action"><h2>Explore the current build</h2><p>The collection is small on purpose, with only images that clearly show the sample items.</p><Link className="primary-button" to="/shop">Browse collection</Link></div></div>
  </>;
}
