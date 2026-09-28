# NexStore

A responsive storefront frontend demo built with React and Vite. The sample catalogue supports product search, category filtering and a bag with quantity controls. Bag contents and theme choice are saved in the visitor's browser.

## Run locally

```bash
npm ci
npm run dev
```

## Current scope

- Responsive collection, mobile navigation and light/dark mode
- Search, category filters, empty results and a persistent demo bag
- Dedicated collection, individual product, bag and about pages
- Keyboard-accessible native bag dialog and reduced-motion support
- No prices, inventory, account system, order submission or payment integration

The included products are sample content. Do not represent the demo as a live store. Before accepting real orders, replace the catalogue with verified product data, implement inventory and checkout through a secure backend/payment provider, and review the actual business policies and contact information.

Run `npm run lint` and `npm run build` before deploying. Check the mobile layout and the full search-to-bag journey in a browser.

Vercel uses `vercel.json` to serve the app on direct visits to `/shop`, `/about`, `/bag` and `/product/:id`. Public page titles and descriptions change on navigation. The site remains a client-rendered demo, so search indexing should be checked with Search Console rather than assumed.

Built by [David Gilbert](https://github.com/SwiftDG).
