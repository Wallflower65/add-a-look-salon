# ADD-A-LOOK • Dreadlock Parlour Platform

I developed a premium, localized web catalog and automated scheduling engine purpose-built for an exclusive dreadlocks specialty parlour based in Site B, Khayelitsha. This lightweight, mobile-first application modernises independent business workflows by transforming a static WhatsApp pricing structure into an interactive digital lookbook experience.

## Live Demo
Experience the production deployment here: [add-a-look-salon.netlify.app](https://add-a-look-salon.netlify.app/)

## Core Engineering Highlights

* **Bypassing Asset Compilation Bottlenecks:** Transitioned asset management from source dependencies to an un-compiled asset layout inside the root public tree. This completely eliminated platform-specific case-sensitivity resolution errors (`exit code 2`) during the remote server assembly stage.
* **State-Driven Multi-Image Catalog (Slider UI):** Engineered an independent local state indexing map within the Lookbook component. Users can seamlessly browse through comprehensive high-resolution lookbook portfolios per service item without breaking layout integrity or triggering parent component lifecycle updates.
* **Zero-Overhead Checkout Router:** Built a lightweight scheduling integration that dynamically sanitises selection data, calculates local pricing values, and deep-links directly into the centralised business WhatsApp API terminal. This eliminates the need for expensive, high-maintenance database infrastructures for small-scale operations.
* **Recruiter-Grade Clean Code Architecture:** Developed entirely using modern functional React design, strict structural layout boundaries, and scalable data-mapping models, ensuring zero redundant inline comments or boilerplate dead zones.

## Tech Stack & Architectural Map

* **Frontend Library:** React (Functional Hooks & Isolated Component Lifecycle Layouts)
* **Build Utility:** Vite (Optimized Production Bundling & High-Performance Micro-Splitting)
* **Styling Engine:** Tailwind CSS (Utility-First Responsive Flexbox/Grid Systems)
* **Design Tokens:** Lucide React (Clean, Vector-Based Minimalist Interface Geometry)
* **Hosting Pipeline:** Continuous Integration via GitHub & Netlify Hooks

## ⚙️ Local Development Setup

To replicate the project environment and run the application locally on your machine, execute the following commands:

```bash
# 1. Clone the repository down to your local system
git clone [https://github.com/Wallflower65/add-a-look-salon.git](https://github.com/Wallflower65/add-a-look-salon.git)

# 2. Navigate straight into the project root folder
cd add-a-look-salon

# 3. Install the precise package node dependencies
npm install

# 4. Spin up the local Vite development compilation server
npm run dev
