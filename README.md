# ScamCheck prototype

A static, mobile-friendly click-through for user testing. The interface contains four tabs: Intro, Task 1, Task 2, and Task 3. The Intro tab pages through five example text messages. Tasks 1–3 let a participant copy a sample message from the simulated iPhone Messages screen, open ScamCheck, paste it, analyze it, and explore the result.

There are no ratings, free-response research forms, response capture, analytics, or backend. Sample text is handled in the current browser tab only. Scam result URLs are visible text and are never clickable. The result is predetermined for each task; this prototype does not run a classifier.

## Run locally

Open `index.html` in a browser or serve the folder with any static HTTP server. No build step or dependencies are required.

## GitHub Pages

The files are ready to publish from the repository root. In the GitHub repository, choose **Settings → Pages**, select **Deploy from a branch**, and choose the branch and `/ (root)` folder. `.nojekyll` is included for static hosting.

## Content references

- [USPS Inspection Service: Smishing package tracking text scams](https://www.uspis.gov/news/scam-article/smishing-package-tracking-text-scams)
- [UPS: Protect yourself from fraud and scams](https://www.ups.com/us/en/support/shipping-support/legal-terms-conditions/fight-fraud)
- [Amazon: Tips to stay safe and avoid scams](https://www.aboutamazon.com/news/retail/how-to-avoid-amazon-scams)

## iPhone interface references

The handset frame and status area use a recent Dynamic Island iPhone as a visual reference. The page keeps its controls within the screen's safe area and adapts the layout to narrow viewports, following Apple's [iOS layout guidance](https://developer.apple.com/design/human-interface-guidelines/layout) and [status bar guidance](https://developer.apple.com/design/human-interface-guidelines/status-bars). Device proportions and Dynamic Island reference: [iPhone 17 technical specifications](https://www.apple.com/iphone-17/specs/).
