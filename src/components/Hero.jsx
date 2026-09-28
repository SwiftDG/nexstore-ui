import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import image from "../assets/women.png";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  return <section id="top" className="hero-section"><div className="wrap hero-grid">
    <div className="hero-copy"><p className="eyebrow">NEXSTORE / SAMPLE COLLECTION</p><h1>Find something that feels like you.</h1><p>Browse a small fashion collection, search by name and save your picks to a bag. This storefront is a working frontend demo.</p><a className="primary-button" href="#shop">Explore the collection <ArrowRight size={19} /></a></div>
    <motion.div className="hero-art" initial={reducedMotion ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .55 }}><div className="hero-shape" aria-hidden="true" /><img src={image} alt="Shopper carrying colourful bags" width="520" height="520" fetchPriority="high" /><span className="hero-art-label">A collection to explore</span></motion.div>
  </div></section>;
}
