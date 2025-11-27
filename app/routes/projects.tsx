import type { Route } from "./+types/home";
import Header from "~/components/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects | Ridgeform Construction" },
    { name: "description", content: "Ridgeform Construction is a Seattle construction firm focused on innovation, quality, and community development. Our mission is to build spaces that bring people together and contribute to the region’s long-term growth and livability." },
    { tagName: "meta", name: "apple-mobile-web-app-title", content: "Ridgeform" },
    { name: "language", content: "en"},
       // Open Graph
    { property: "og:type", content: "website" },
    {
      property: "og:title",
      content: "Projects | Ridgeform Construction",
    },
    {
      property: "og:description",
      content:
        "Ridgeform Construction is a Seattle construction firm focused on innovation, quality, and community development. Our mission is to build spaces that bring people together and contribute to the region’s long-term growth and livability.",
    },
    { property: "og:url", content: "https://ridgeformconstruction.com/" },
    { property: "og:image", content: "https://www.ridgeformconstruction.com.com/assets/ridgeform_logo.png" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Projects | Ridgeform Construction",
    },
    {
      name: "twitter:description",
      content:
        "Ridgeform Construction is a Seattle construction firm focused on innovation, quality, and community development. Our mission is to build spaces that bring people together and contribute to the region’s long-term growth and livability.",
    },
    {
      name: "twitter:image",
      content: "https://www.ridgeformconstruction.com.com/assets/ridgeform_logo.png",
    },

  ];
}

export default function Home() {

  return (
    <>
    <div id="homepage-header">
          <Header isHome={false} />
          </div>
    </>
  );
}
