export const BRAND = {
  name: "PURELY PANEER",
  tagline: "AS HONEST AS FRESH MILK",
  subtagline: "Pure paneer. Not just paneer.",
  positioning: "100% pure paneer, freshly made in Mogappair, Chennai with food-grade scientific standards and wholesome farm milk.",
  phone: "+91 99525 11737",
  phoneRaw: "919952511737",
  whatsappBaseUrl: "https://wa.me/919952511737",
  instagramUrl: "https://www.instagram.com/purely_paneer/",
  instagramHandle: "@purely_paneer",
  location: "Mogappair, Chennai, Tamil Nadu",
  fssaiNumber: "FSSAI Certified Unit",
  stats: [
    { label: "Purity Guarantee", value: "100% Pure Milk" },
    { label: "Preservatives", value: "Zero Added" },
    { label: "Craft Standards", value: "Food Technologist" },
    { label: "Daily Batch", value: "Fresh Daily" },
  ],
  trustPillars: [
    {
      title: "FSSAI Certified",
      subtitle: "Certified Food Grade",
      desc: "Prepared in an impeccably sanitized facility adhering to rigorous food safety and hygiene protocols."
    },
    {
      title: "Food Technologist Owned",
      subtitle: "Scientific Precision",
      desc: "Formulated and overseen directly by a qualified Food Technologist with deep knowledge of milk proteins."
    },
    {
      title: "Fresh Daily & Made to Order",
      subtitle: "Never Stored For Days",
      desc: "Batches are crafted fresh to order for Mogappair & Chennai food lovers so you enjoy peak tenderness."
    },
    {
      title: "Real Milk, No Preservatives",
      subtitle: "Pure Wholesome Dairy",
      desc: "No starch, no chemical softeners, no bleach, and no artificial fillers. Just real wholesome milk."
    },
    {
      title: "100% Vegetarian",
      subtitle: "Purely Ethical",
      desc: "Curdled using food-grade microbial/citric coagulants with gentle, traditional curd-draining technique."
    }
  ],
  processSteps: [
    {
      step: "01",
      title: "QUALITY MILK",
      desc: "Sourcing rich, farm-fresh milk tested for fat and SNF purity without adulteration."
    },
    {
      step: "02",
      title: "CAREFUL PREPARATION",
      desc: "Heated and curdled at exact scientific temperatures to preserve milk protein integrity."
    },
    {
      step: "03",
      title: "FRESH PANEER",
      desc: "Pressed naturally through cheesecloth muslin to achieve signature pillow-soft moisture."
    },
    {
      step: "04",
      title: "PACKED WITH CARE",
      desc: "Hygienically packaged immediately after cutting, retaining natural sweetness and softness."
    },
    {
      step: "05",
      title: "DELIVERED FRESH",
      desc: "Dispatched direct to your doorstep in Chennai with cold-chain care for instant cooking joy."
    }
  ],
  socialProof: {
    headline: "LOVED BY OUR CUSTOMERS",
    customerCountNotice: "Fresh batches delivered across Mogappair & Chennai",
    testimonials: [
      {
        quote: "The texture is incomparably softer than supermarket packaged blocks. You can actually taste the sweet fresh milk note. Never buying commercial paneer again!",
        author: "Priya S.",
        location: "Mogappair West, Chennai",
        product: "Fresh Paneer (500g)"
      },
      {
        quote: "The Hariyali Paneer on skewers was an absolute hit for our Sunday barbecue. Clean herb flavors without artificial food coloring. Remarkable quality.",
        author: "Arunachalam K.",
        location: "Anna Nagar, Chennai",
        product: "Hariyali Paneer"
      },
      {
        quote: "As someone conscious of protein intake, the Chocolate Protein Dessert is revolutionary! Creamy, satisfying and made with actual paneer. Genius formulation.",
        author: "Kavitha R.",
        location: "Nolambur, Chennai",
        product: "Paneer Chocolate Protein Dessert"
      }
    ]
  }
};

/**
 * Builds a WhatsApp chat link with dynamically formatted order message
 */
export function createWhatsAppOrderLink({ product, quantity = 1, size = "500g", notes = "" }) {
  let message = `Hi Purely Paneer! I would like to order:

Product: ${product?.name || "Purely Paneer"}
Quantity: ${quantity}
Size: ${size}`;

  if (notes) {
    message += `\nNote: ${notes}`;
  }

  message += `\n\nPlease share availability and delivery details.`;

  return `${BRAND.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a WhatsApp chat link for checking delivery in Chennai
 */
export function createWhatsAppDeliveryCheckLink(area = "") {
  const message = area
    ? `Hi Purely Paneer! I would like to check delivery availability for: ${area}, Chennai.`
    : `Hi Purely Paneer! I would like to check delivery availability for my location.`;
  return `${BRAND.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
