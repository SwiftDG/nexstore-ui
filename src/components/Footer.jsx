import logo from "../assets/logo.svg";
export default function Footer() {
  return <footer className="site-footer"><div className="wrap footer-grid"><div><a className="brand" href="#top"><img src={logo} alt="" width="34" height="34" />NexStore</a><p>A frontend storefront demo. Catalogue details and ordering are still being developed.</p></div><div><h2>Explore</h2><a href="#top">Back to top</a><a href="#shop">Collection</a></div><div><h2>Project</h2><a href="https://github.com/SwiftDG/nexstore-ui" target="_blank" rel="noreferrer">View source code</a><span>Built by David Gilbert</span></div></div></footer>;
}
