# Museum Mount Generator

Live at /mount-generator/. Standalone browser app; no ChatGPT dependency, backend, account, or API key required.

To rebuild: run npm ci, then npm run build from this directory. The generated static files go into ../../mount-generator and are committed for Cloudflare Pages, whose root site has no build step.

The default wall plate and coupon use the physically tested 0.075 mm clearance per flank. Preserve the fixed dovetail dimensions when editing the cradle.

## Design profiles

Print-tested V2 remains the default. The Sculpted prototype preset uses a 36 mm body to cover the receiver, 18 mm root, 6 mm tip, larger silhouette rounds and upper edge rounds. It retains the same dovetail but requires a physical test print and load validation. Prototype files are named accordingly. Both profiles keep the flat bed face and removable dovetail shoe.
