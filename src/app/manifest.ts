import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mercury Traders — Automotive Spare Parts",
    short_name: "Mercury Traders",
    description:
      "Mercury Traders — Delhi's trusted source for genuine automotive spare parts. Search by car, get OEM & aftermarket parts delivered pan-India.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F2EE",
    theme_color: "#FF5722",
    orientation: "portrait-primary",
    categories: ["automotive", "shopping", "business"],
    icons: [
      {
        src: "/mercury-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/mercury-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
