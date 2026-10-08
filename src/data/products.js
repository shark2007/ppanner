export const PRODUCTS = [
  {
    id: "fresh-paneer",
    slug: "fresh-paneer",
    name: "Fresh Paneer",
    shortDescription: "Soft, fresh paneer made for everyday cooking.",
    fullDescription: "Artisanal paneer crafted with whole dairy milk, slow-pressed to retain natural moisture and tenderness. Incomparably soft, slightly sweet, and never rubbery. Melts effortlessly into curries, tikkas, and parathas.",
    price: "From ₹140",
    pricingDetails: [
      { size: "250g", price: "₹140" },
      { size: "500g", price: "₹260", recommended: true },
      { size: "1kg", price: "₹500" }
    ],
    sizes: ["250g", "500g", "1kg"],
    defaultSize: "500g",
    category: "Classic Pure Paneer",
    image: "/images/hero_paneer.jpg",
    gallery: [
      "/images/hero_paneer.jpg",
      "/images/craft_process.jpg",
      "/images/lifestyle_tikka.jpg"
    ],
    tags: ["Bestseller", "Daily Fresh", "100% Pure Milk"],
    ingredients: "Fresh Whole Milk, Natural Coagulant, Pure Water.",
    shelfLife: "Consume within 3-4 days refrigerated. Fresh batch made to order.",
    flavourProfile: "Clean, naturally sweet milky curd with melt-in-mouth texture.",
    accentColor: "#1E4330",
    badge: "Most Loved Daily Staple",
    featured: true,
    available: true
  },
  {
    id: "hariyali-paneer",
    slug: "hariyali-paneer",
    name: "Hariyali Paneer",
    shortDescription: "Aromatic, creamy and packed with fresh green flavours.",
    fullDescription: "Pure fresh paneer cubes marinated in a freshly pounded paste of garden-fresh mint, coriander, roasted cumin, and subtle green chili. Zero artificial green food coloring — 100% pure herbs and milk cream.",
    price: "From ₹170",
    pricingDetails: [
      { size: "250g", price: "₹170" },
      { size: "500g", price: "₹320", recommended: true }
    ],
    sizes: ["250g", "500g"],
    defaultSize: "250g",
    category: "Flavoured Paneer",
    image: "/images/hariyali_paneer.jpg",
    gallery: [
      "/images/hariyali_paneer.jpg",
      "/images/lifestyle_tikka.jpg",
      "/images/hero_paneer.jpg"
    ],
    tags: ["Fresh Herbs", "Mint & Coriander", "No Food Color"],
    ingredients: "Fresh Paneer (Whole Milk), Fresh Mint, Fresh Coriander, Roasted Cumin, Green Chili, Himalayan Rock Salt, Cold-Pressed Oil.",
    shelfLife: "Refrigerate and consume within 3 days for maximum herb aroma.",
    flavourProfile: "Herbal freshness with a mild aromatic tang and silky mouthfeel.",
    accentColor: "#2F6B48",
    badge: "Signature Flavour",
    featured: true,
    available: true
  },
  {
    id: "peri-peri-paneer",
    slug: "peri-peri-paneer",
    name: "Peri Peri Paneer",
    shortDescription: "Bold, smoky and flavourful paneer for spice lovers.",
    fullDescription: "Fresh tender paneer enveloped in a zesty, smoky peri peri spice blend with crushed birds eye chili, smoked paprika, garlic, and citrus zest. Pan sear, air fry, or skew for a finger-licking gourmet starter.",
    price: "From ₹170",
    pricingDetails: [
      { size: "250g", price: "₹170" },
      { size: "500g", price: "₹320", recommended: true }
    ],
    sizes: ["250g", "500g"],
    defaultSize: "250g",
    category: "Flavoured Paneer",
    image: "/images/peri_peri_paneer.jpg",
    gallery: [
      "/images/peri_peri_paneer.jpg",
      "/images/lifestyle_tikka.jpg",
      "/images/hero_paneer.jpg"
    ],
    tags: ["Bold & Smoky", "Air Fryer Ready", "Spicy Delight"],
    ingredients: "Fresh Paneer (Whole Milk), African Birds Eye Chili blend, Smoked Paprika, Crushed Garlic, Lemon Zest, Sea Salt.",
    shelfLife: "Refrigerate and cook within 3-4 days.",
    flavourProfile: "Smoky punch, citrus zing, balanced heat, and milky softness.",
    accentColor: "#B53D1B",
    badge: "Party Favourite",
    featured: true,
    available: true
  },
  {
    id: "paneer-chocolate-protein-dessert",
    slug: "paneer-chocolate-protein-dessert",
    name: "Paneer Chocolate Protein Dessert",
    shortDescription: "A rich chocolate protein dessert made with real paneer.",
    fullDescription: "A game-changing healthy dessert engineered by our Food Technologist. Fresh velvety paneer is whipped with pure Belgian cocoa and natural sweetener into a luscious mousse-like dessert loaded with casein and milk proteins.",
    price: "From ₹190",
    pricingDetails: [
      { size: "200g Jar", price: "₹190", recommended: true },
      { size: "Pack of 2 (400g)", price: "₹360" }
    ],
    sizes: ["200g Jar", "Pack of 2 (400g)"],
    defaultSize: "200g Jar",
    category: "Protein Innovation",
    image: "/images/chocolate_protein_dessert.jpg",
    gallery: [
      "/images/chocolate_protein_dessert.jpg",
      "/images/hero_paneer.jpg",
      "/images/craft_process.jpg"
    ],
    tags: ["High Protein", "Food Technologist Recipe", "Pure Belgian Cocoa"],
    ingredients: "Fresh Paneer Base (Whipped Whole Milk Curd), Premium Cocoa, Natural Sweetener, Dark Chocolate Shavings.",
    shelfLife: "Chilled shelf life 4-5 days. Best enjoyed cold directly from jar.",
    flavourProfile: "Decadent dark chocolate truffle richness with creamy dairy finish.",
    accentColor: "#57382B",
    badge: "Guilt-Free High Protein",
    featured: true,
    available: true
  }
];

export function getProductBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}
