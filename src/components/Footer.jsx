import logo from "../assets/logo.svg";
import { Link } from "react-router";
export default function Footer() {
  return <footer className="site-footer"><div className="wrap footer-grid"><div><Link className="brand" to="/"><img src={logo} alt="" width="34" height="34" />NexStore</Link><p>A frontend storefront demo. Catalogue details and ordering are still being developed.</p></div><div><h2>Explore</h2><Link to="/">Home</Link><Link to="/shop">Collection</Link><Link to="/about">About</Link><Link to="/bag">Bag</Link></div><div><h2>Project</h2><a href="https://github.com/SwiftDG/nexstore-ui" target="_blank" rel="noreferrer">View source code</a><span>Built by David Gilbert</span></div></div></footer>;
}
